import { DOCUMENT, registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import localeFr from '@angular/common/locales/fr';
import { Injectable, computed, inject, signal } from '@angular/core';

import { dictionaries, Locale } from './translations';

const STORAGE_KEY = 'locale';

registerLocaleData(localeEn);
registerLocaleData(localeFr);

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly document = inject(DOCUMENT);
  readonly locale = signal<Locale>(this.initialLocale());
  readonly dict = computed(() => dictionaries[this.locale()]);

  constructor() {
    this.apply();
  }

  setLocale(locale: Locale): void {
    this.locale.set(locale);
    this.apply();
  }

  private apply(): void {
    this.document.documentElement.lang = this.locale();
    localStorage.setItem(STORAGE_KEY, this.locale());
  }

  private initialLocale(): Locale {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'fr') {
      return stored;
    }
    return navigator.language.startsWith('fr') ? 'fr' : 'en';
  }
}
