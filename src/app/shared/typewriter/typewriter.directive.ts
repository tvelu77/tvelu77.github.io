import {
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  effect,
  inject,
  input,
  numberAttribute,
} from '@angular/core';

/**
 * Types the given phrase(s) letter by letter, deletes them, then cycles to the
 * next phrase, looping forever. The host element's content is replaced by the
 * animated text and a blinking caret is appended via CSS. Restarts itself when
 * the phrases input changes (e.g. on a locale switch).
 */
@Directive({
  selector: '[appTypewriter]',
})
export class TypewriterDirective implements OnInit, OnDestroy {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);

  /** A single phrase or a list of phrases to cycle through. */
  readonly appTypewriter = input<string | string[]>([]);
  /** Delay in ms between two typed letters. */
  readonly typeSpeed = input(120, { transform: numberAttribute });
  /** Delay in ms between two deleted letters. */
  readonly deleteSpeed = input(60, { transform: numberAttribute });
  /** Delay in ms once a phrase is fully typed or fully deleted. */
  readonly pause = input(1800, { transform: numberAttribute });

  private timer: ReturnType<typeof setTimeout> | null = null;
  private running = false;
  private started = false;

  constructor() {
    effect(() => {
      this.appTypewriter();
      if (this.started) {
        this.start();
      }
    });
  }

  ngOnInit(): void {
    this.start();
  }

  ngOnDestroy(): void {
    this.stop();
  }

  private start(): void {
    this.stop();
    const phrases = this.phrases();
    if (phrases.length === 0) {
      return;
    }
    this.started = true;
    this.running = true;
    this.element.nativeElement.classList.add('typewriter-caret');
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const step = (): void => {
      if (!this.running) {
        return;
      }
      const phrase = phrases[phraseIndex];
      charIndex += deleting ? -1 : 1;
      this.write(phrase.slice(0, charIndex), phrase);

      if (!deleting && charIndex === phrase.length) {
        deleting = true;
        this.timer = setTimeout(step, this.pause());
        return;
      }
      if (deleting && charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        this.timer = setTimeout(step, this.pause());
        return;
      }
      this.timer = setTimeout(step, deleting ? this.deleteSpeed() : this.typeSpeed());
    };

    this.timer = setTimeout(step, this.typeSpeed());
  }

  private stop(): void {
    this.running = false;
    if (this.timer !== null) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  private phrases(): string[] {
    const value = this.appTypewriter();
    if (Array.isArray(value)) {
      return value.filter((phrase) => phrase.length > 0);
    }
    return value ? [value] : [];
  }

  private write(text: string, ariaLabel = text): void {
    const element = this.element.nativeElement;
    element.textContent = text;
    element.setAttribute('aria-label', ariaLabel);
  }
}
