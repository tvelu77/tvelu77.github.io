import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the current year and a source link', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain(new Date().getFullYear().toString());
    const link = element.querySelector('a');
    expect(link?.getAttribute('href')).toContain('github.com');
    expect(link?.textContent).toContain('View source');
  });
});
