import { Component, inject } from '@angular/core';

import { TranslationService } from '../../shared/i18n/translation.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  protected readonly i18n = inject(TranslationService);
  protected readonly year = new Date().getFullYear();
  protected readonly sourceUrl = 'https://codeberg.org/tvelu77/pages';
}
