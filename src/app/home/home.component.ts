import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-home',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private translateService: TranslateService) {}

  onClick(): string {
    switch (this.translateService.currentLang) {
      case "fr": return "https://tvelu77.frama.io/cv-fr/";
      default: return "https://tvelu77.frama.io/cv-en/";
    }
  }

}
