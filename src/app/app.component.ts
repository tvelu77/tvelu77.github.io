import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, AboutComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tvelu77.github.io';
  currentLang: string = "en";

  constructor(private readonly translate: TranslateService) {
    this.translate.addLangs(['fr', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  switchLanguage(language: string) {
    this.currentLang = language;
    this.translate.use(language);
  }
}
