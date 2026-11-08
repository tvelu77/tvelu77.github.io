import { Component, computed, inject } from '@angular/core';

import { TranslationService } from '../../shared/i18n/translation.service';
import { TimelineItem, TimelineComponent } from '../../shared/timeline/timeline.component';

@Component({
  selector: 'app-experiences',
  imports: [TimelineComponent],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css',
})
export class ExperiencesComponent {
  protected readonly i18n = inject(TranslationService);

  protected readonly professional = computed<TimelineItem[]>(() => [
    {
      start: '2026-04-01',
      ongoing: true,
      title: this.i18n.dict().experiences.softwareEngineer,
      company: 'Sight',
      client: 'BPCE IT',
      location: 'Paris, France',
      tags: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'Jenkins'],
    },
    {
      start: '2024-10-01',
      end: '2026-04-01',
      title: this.i18n.dict().experiences.softwareEngineer,
      company: 'Solutec',
      client: 'Société Générale - CIB',
      location: 'La Défense, France',
      tags: [
        'Java',
        'Spring Boot',
        'Angular',
        'TypeScript',
        'Jenkins',
        'GitHub Actions',
        'Docker',
        'Kubernetes',
      ],
    },
    {
      start: '2021-09-01',
      end: '2024-09-01',
      title: this.i18n.dict().experiences.softwareEngineer,
      company: 'Orange',
      location: 'Paris, France',
      tags: ['PHP', 'Symfony', 'HTML', 'CSS', 'JavaScript', 'Gitlab CI/CD'],
    },
  ]);

  protected readonly scholar = computed<TimelineItem[]>(() => [
    {
      start: '2021-09-01',
      end: '2024-09-01',
      title: this.i18n.dict().experiences.master,
      company: 'ESIEE Paris',
      location: 'Champs-sur-Marne, France',
      tags: [
        'Software Engineering',
        'Algorithms',
        'C',
        'Java',
        'Python',
        'Web Development',
        'Databases',
      ],
    },
    {
      start: '2023-09-01',
      end: '2023-12-01',
      title: this.i18n.dict().experiences.exchange,
      company: 'Université Laval',
      location: this.i18n.dict().experiences.quebec,
      tags: ['Software Engineering', 'C++', 'Java', 'Web Development'],
    },
    {
      start: '2019-09-01',
      end: '2021-09-01',
      title: this.i18n.dict().experiences.prep,
      company: 'ESIEE Paris',
      location: 'Champs-sur-Marne, France',
      tags: ['Mathematics', 'Physics', 'Electronics', 'Computer Science', 'English'],
    },
  ]);
}
