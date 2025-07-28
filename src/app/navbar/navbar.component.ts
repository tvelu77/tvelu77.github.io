import { Component } from '@angular/core';
import { ThemeService } from '../theme/theme.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private readonly themeService: ThemeService,
    private readonly translation: TranslateService
  ) { }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  isDarkMode() {
    return this.themeService.isDarkMode();
  }

  useLanguage(language: string) {
    this.translation.use(language);
  }

  getCurrentLanguage(): string {
    return this.translation.currentLang;
  }

}
