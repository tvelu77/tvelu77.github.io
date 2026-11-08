import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render one card per project', () => {
    const cards = fixture.nativeElement.querySelectorAll('a');
    const titles = fixture.nativeElement.querySelectorAll('h3');
    expect(cards.length).toBe(titles.length);
    expect(cards.length).toBeGreaterThan(0);
  });
});
