import { Component, computed, inject, signal } from '@angular/core';

import { AvatarComponent } from '../../shared/avatar/avatar.component';
import { TranslationService } from '../../shared/i18n/translation.service';
import { catDictionary } from '../../shared/i18n/translations';
import { PillComponent } from '../../shared/pill/pill.component';
import { TypewriterDirective } from '../../shared/typewriter/typewriter.directive';

const CAT_CLICKS = 5;

@Component({
  selector: 'app-presentation',
  imports: [AvatarComponent, PillComponent, TypewriterDirective],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css',
})
export class PresentationComponent {
  protected readonly i18n = inject(TranslationService);
  protected readonly name = 'Thomas';
  protected readonly catMode = signal(false);
  private avatarClicks = 0;

  protected readonly texts = computed(() =>
    this.catMode() ? catDictionary[this.i18n.locale()] : this.i18n.dict().presentation,
  );
  protected readonly titles = computed(() => this.texts().titles);
  protected readonly skills = ['Java', 'Spring Boot', 'Angular', 'TypeScript'];

  protected readonly photoUrl = computed(() =>
    this.catMode() ? '/images/boris.jpg' : '/images/avatar.jpg',
  );

  protected onAvatarClick(): void {
    this.avatarClicks++;
    if (this.avatarClicks >= CAT_CLICKS) {
      this.avatarClicks = 0;
      this.catMode.update((value) => !value);
    }
  }
}
