import { Component, inject } from '@angular/core';

import { TranslationService } from '../../shared/i18n/translation.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  protected readonly i18n = inject(TranslationService);
  protected readonly email = 'velu.thomas@murena.io';
  protected readonly socials = [
    { label: 'GitHub', icon: 'github', url: 'https://github.com/tvelu77' },
    { label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/thomas-velu' },
  ];
}
