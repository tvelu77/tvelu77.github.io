import { Component, Input } from '@angular/core';
import { Project } from '../model/project';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input()
  project!: Project;
}
