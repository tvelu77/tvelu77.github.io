import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineItem, TimelineComponent } from './timeline.component';

describe('TimelineComponent', () => {
  let component: TimelineComponent;
  let fixture: ComponentFixture<TimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TimelineComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('items', [{ start: '2024-06-15' }]);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a single date once', () => {
    const times = fixture.nativeElement.querySelectorAll('time');
    expect(times.length).toBe(1);
    expect(times[0].getAttribute('datetime')).toBe('2024-06-15');
  });

  it('should render both dates of a range', () => {
    const items: TimelineItem[] = [{ start: '2024-01-01', end: '2024-12-31' }];
    fixture.componentRef.setInput('items', items);
    fixture.detectChanges();

    const times = fixture.nativeElement.querySelectorAll('time');
    expect(times.length).toBe(2);
    expect(times[0].getAttribute('datetime')).toBe('2024-01-01');
    expect(times[1].getAttribute('datetime')).toBe('2024-12-31');
  });

  it('should render Present for an ongoing entry', () => {
    fixture.componentRef.setInput('items', [{ start: '2026-04-01', ongoing: true }]);
    fixture.detectChanges();

    const times = fixture.nativeElement.querySelectorAll('time');
    expect(times.length).toBe(1);
    expect(fixture.nativeElement.textContent).toContain('Present');
  });

  it('should render title and description when provided', () => {
    fixture.componentRef.setInput('items', [
      { start: '2024-01-01', end: '2024-12-31', title: 'Job', description: 'Did things' },
    ]);
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('h3')?.textContent).toContain('Job');
    expect(element.querySelector('p')?.textContent).toContain('Did things');
  });

  it('should render tags as pills when provided', () => {
    fixture.componentRef.setInput('items', [
      { start: '2024-01-01', tags: ['Angular', 'Spring Boot'] },
    ]);
    fixture.detectChanges();

    const pills = fixture.nativeElement.querySelectorAll('app-pill');
    expect(pills.length).toBe(2);
    expect(pills[0].textContent).toContain('Angular');
    expect(pills[1].textContent).toContain('Spring Boot');
  });

  it('should render company, client and location when provided', () => {
    fixture.componentRef.setInput('items', [
      { start: '2024-01-01', company: 'Sight', client: 'BPCE', location: 'Paris, France' },
    ]);
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    const meta = element.querySelector('p');
    expect(meta?.textContent).toContain('Sight');
    expect(meta?.textContent).toContain('BPCE');
    expect(meta?.textContent).toContain('Paris, France');
  });
});
