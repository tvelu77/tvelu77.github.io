import { DOCUMENT } from '@angular/common';
import { Component, inject, signal } from '@angular/core';

import { TranslationService } from '../i18n/translation.service';

const STORAGE_KEY = 'theme';

@Component({
  selector: 'app-theme-toggle',
  imports: [],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css',
})
export class ThemeToggleComponent {
  private readonly document = inject(DOCUMENT);
  protected readonly i18n = inject(TranslationService);
  protected readonly dark = signal(this.initialDark());

  constructor() {
    this.apply();
  }

  protected toggle(): void {
    this.dark.update((value) => !value);
    this.apply();
  }

  private apply(): void {
    this.document.documentElement.classList.toggle('dark', this.dark());
    localStorage.setItem(STORAGE_KEY, this.dark() ? 'dark' : 'light');
  }

  private initialDark(): boolean {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') {
      return stored === 'dark';
    }
    return (
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    );
  }
}
