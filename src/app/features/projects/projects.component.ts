import { Component, computed, inject } from '@angular/core';

import { TranslationService } from '../../shared/i18n/translation.service';
import { CardComponent } from '../../shared/card/card.component';
import { PillComponent } from '../../shared/pill/pill.component';

export interface ProjectItem {
  title: string;
  description: string;
  url?: string;
  tags?: string[];
}

@Component({
  selector: 'app-projects',
  imports: [CardComponent, PillComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  protected readonly i18n = inject(TranslationService);

  protected readonly projects = computed<ProjectItem[]>(() => [
    {
      title: 'Portfolio',
      description: this.i18n.dict().projects.portfolio,
      url: 'https://codeberg.org/tvelu77/pages',
      tags: ['Angular', 'Tailwind CSS'],
    },
    {
      title: 'Freya',
      description: this.i18n.dict().projects.freya,
      url: 'https://codeberg.org/tvelu77/freya',
      tags: ['Kotlin', 'Jetpack Compose', 'Android'],
    },
    {
      title: 'CloutMetrics',
      description: this.i18n.dict().projects.cloutmetrics,
      url: 'https://codeberg.org/tvelu77/cloutmetrics',
      tags: ['Java', 'Spring Boot'],
    },
  ]);
}
