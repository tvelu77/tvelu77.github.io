import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaleToggleComponent } from './locale-toggle.component';

describe('LocaleToggleComponent', () => {
  let fixture: ComponentFixture<LocaleToggleComponent>;

  beforeEach(async () => {
    localStorage.removeItem('locale');
    document.documentElement.lang = 'en';

    await TestBed.configureTestingModule({
      imports: [LocaleToggleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LocaleToggleComponent);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should toggle the document language', () => {
    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;

    button.click();
    fixture.detectChanges();
    expect(document.documentElement.lang).toBe('fr');

    button.click();
    fixture.detectChanges();
    expect(document.documentElement.lang).toBe('en');
  });
});
