import { Component, input } from '@angular/core';

@Component({
  selector: 'app-skill',
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {
  imageLink = input<string>();
  alt = input<string>();
  skillName = input<string>();
}
