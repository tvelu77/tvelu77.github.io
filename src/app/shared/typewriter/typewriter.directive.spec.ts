import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, vi } from 'vitest';

import { TypewriterDirective } from './typewriter.directive';

@Component({
  imports: [TypewriterDirective],
  template: '<span appTypewriter [appTypewriter]="[\'Hi\']" [typeSpeed]="10" [deleteSpeed]="5" [pause]="20"></span>',
})
class HostComponent {
}

describe('TypewriterDirective', () => {
  let fixture: ComponentFixture<HostComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    vi.useFakeTimers();
    await TestBed.configureTestingModule({
      imports: [HostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('span');
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should create', () => {
    expect(element).toBeTruthy();
  });

  it('should start with empty text', () => {
    expect(element.textContent).toBe('');
  });

  it('should type, delete and repeat letter by letter', () => {
    vi.advanceTimersByTime(10);
    expect(element.textContent).toBe('H');

    vi.advanceTimersByTime(10);
    expect(element.textContent).toBe('Hi');

    vi.advanceTimersByTime(19);
    expect(element.textContent).toBe('Hi');

    vi.advanceTimersByTime(1);
    expect(element.textContent).toBe('H');

    vi.advanceTimersByTime(5);
    expect(element.textContent).toBe('');

    vi.advanceTimersByTime(19);
    expect(element.textContent).toBe('');

    vi.advanceTimersByTime(1);
    expect(element.textContent).toBe('H');
  });
});
