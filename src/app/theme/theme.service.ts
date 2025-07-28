import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private darkMode = false;

  constructor() {
    const savedTheme = localStorage.getItem('darkMode');
    this.darkMode = savedTheme ? JSON.parse(savedTheme) : false;
    this.applyTheme();
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
    this.applyTheme();
  }

  applyTheme() {
    const navbar = document.getElementById('main-navbar');
    if (this.darkMode) {
      document.body.classList.add('dark-mode');
      navbar?.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
      navbar?.classList.remove('dark-mode');
    }
  }

  isDarkMode() {
    return this.darkMode;
  }

}
