import { Component } from '@angular/core';
import { Project } from '../model/project';
import { CommonModule } from '@angular/common';
import projects from '../../assets/projects.json';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, ProjectComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
  projects: Project[] = (projects as Project[]);
}
