import { Component } from '@angular/core';
import { SkillComponent } from './skill/skill.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  imports: [SkillComponent, TranslatePipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

}
