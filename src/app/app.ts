import { Component, signal } from '@angular/core';
import { ContactComponent } from './features/contact/contact.component';
import { ExperiencesComponent } from './features/experiences/experiences.component';
import { FooterComponent } from './features/footer/footer.component';
import { PresentationComponent } from './features/presentation/presentation.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { LocaleToggleComponent } from './shared/i18n/locale-toggle.component';
import { ThemeToggleComponent } from './shared/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-root',
  imports: [
    LocaleToggleComponent,
    ThemeToggleComponent,
    PresentationComponent,
    ExperiencesComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('pages');
}
