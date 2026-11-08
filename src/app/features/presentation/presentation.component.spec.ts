import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslationService } from '../../shared/i18n/translation.service';
import { PresentationComponent } from './presentation.component';

describe('PresentationComponent', () => {
  let component: PresentationComponent;
  let fixture: ComponentFixture<PresentationComponent>;

  beforeEach(async () => {
    localStorage.removeItem('locale');

    await TestBed.configureTestingModule({
      imports: [PresentationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PresentationComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should swap the avatar for the cat after five clicks and back', () => {
    const avatar = fixture.nativeElement.querySelector('app-avatar');
    const img = () => fixture.nativeElement.querySelector('img') as HTMLImageElement;
    const heading = () => fixture.nativeElement.querySelector('h1');
    expect(img().getAttribute('src')).toContain('avatar.jpg');
    expect(heading().textContent).toContain('Hello,');

    for (let i = 0; i < 5; i++) {
      avatar.click();
    }
    fixture.detectChanges();
    expect(img().getAttribute('src')).toContain('boris.jpg');
    expect(heading().textContent).toContain('Meow,');

    for (let i = 0; i < 5; i++) {
      avatar.click();
    }
    fixture.detectChanges();
    expect(img().getAttribute('src')).toContain('avatar.jpg');
    expect(heading().textContent).toContain('Hello,');
  });

  it('should not swap the avatar before five clicks', () => {
    const avatar = fixture.nativeElement.querySelector('app-avatar');

    for (let i = 0; i < 4; i++) {
      avatar.click();
    }
    fixture.detectChanges();

    const img = fixture.nativeElement.querySelector('img') as HTMLImageElement;
    expect(img.getAttribute('src')).toContain('avatar.jpg');
  });

  it('should miaou when the cat is greeted in french', () => {
    TestBed.inject(TranslationService).setLocale('fr');
    fixture.detectChanges();

    const avatar = fixture.nativeElement.querySelector('app-avatar');
    const heading = () => fixture.nativeElement.querySelector('h1');
    expect(heading().textContent).toContain('Bonjour,');

    for (let i = 0; i < 5; i++) {
      avatar.click();
    }
    fixture.detectChanges();
    expect(heading().textContent).toContain('Miaou,');
  });
});
