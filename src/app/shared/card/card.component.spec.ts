import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

@Component({
  imports: [CardComponent],
  template: '<app-card [url]="url"><p class="content">Projected</p></app-card>',
})
class HostComponent {
  url?: string;
}

async function createHost(url?: string): Promise<ComponentFixture<HostComponent>> {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.componentInstance.url = url;
  await fixture.whenStable();
  return fixture;
}

describe('CardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent],
    }).compileComponents();
  });

  it('should render projected content', async () => {
    const fixture = await createHost();
    expect(fixture.nativeElement.querySelector('.content')?.textContent).toContain('Projected');
  });

  it('should render a link when url is provided', async () => {
    const fixture = await createHost('https://example.com');
    const link = fixture.nativeElement.querySelector('a');
    expect(link?.getAttribute('href')).toBe('https://example.com');
    expect(link?.getAttribute('target')).toBe('_blank');
  });

  it('should not link when no url is provided', async () => {
    const fixture = await createHost();
    const link = fixture.nativeElement.querySelector('a');
    expect(link?.hasAttribute('href')).toBe(false);
    expect(link?.textContent).toContain('Projected');
  });
});
