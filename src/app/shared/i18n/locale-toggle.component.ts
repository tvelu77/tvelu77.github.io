import { Component, computed, inject } from '@angular/core';

import { Locale } from './translations';
import { TranslationService } from './translation.service';

@Component({
  selector: 'app-locale-toggle',
  imports: [],
  templateUrl: './locale-toggle.component.html',
  styleUrl: './locale-toggle.component.css',
})
export class LocaleToggleComponent {
  protected readonly i18n = inject(TranslationService);

  protected readonly target = computed<Locale>(() => (this.i18n.locale() === 'en' ? 'fr' : 'en'));
  protected readonly targetLabel = computed(() =>
    this.target() === 'fr' ? this.i18n.dict().locale.toFrench : this.i18n.dict().locale.toEnglish,
  );
}
