import { TestBed } from '@angular/core/testing';

import { TranslationService } from './translation.service';

describe('TranslationService', () => {
  beforeEach(() => {
    localStorage.removeItem('locale');
    document.documentElement.lang = 'en';

    TestBed.configureTestingModule({});
  });

  it('should default to english for a non-french browser', () => {
    const service = TestBed.inject(TranslationService);
    expect(service.locale()).toBe('en');
  });

  it('should switch locale, persist it and update the document language', () => {
    const service = TestBed.inject(TranslationService);

    service.setLocale('fr');

    expect(service.locale()).toBe('fr');
    expect(service.dict().experiences.present).toBe('Présent');
    expect(localStorage.getItem('locale')).toBe('fr');
    expect(document.documentElement.lang).toBe('fr');
  });
});
