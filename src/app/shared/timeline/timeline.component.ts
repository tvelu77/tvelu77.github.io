import { DatePipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';

import { TranslationService } from '../i18n/translation.service';
import { PillComponent } from '../pill/pill.component';

export interface TimelineItem {
  start: string;
  end?: string;
  ongoing?: boolean;
  title?: string;
  company?: string;
  client?: string;
  location?: string;
  description?: string;
  tags?: string[];
}

@Component({
  selector: 'app-timeline',
  imports: [DatePipe, PillComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
})
export class TimelineComponent {
  protected readonly i18n = inject(TranslationService);

  readonly items = input.required<TimelineItem[]>();
  readonly dateFormat = input('mediumDate');
}
