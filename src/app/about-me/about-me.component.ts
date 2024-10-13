import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [ButtonModule, CardModule, AvatarModule, NgFor],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  title = 'Développeur Full Stack';
  description =
    'Je suis un développeur full stack passionné par la création d\'applications web dynamiques et réactives. J\'ai de l\'expérience en développement front-end et back-end.';
  skills = [
    'Angular',
    'Node.js',
    'Express',
    'MongoDB',
    'HTML/CSS',
    'JavaScript/TypeScript',
  ];
}
