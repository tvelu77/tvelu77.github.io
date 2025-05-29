import { Component } from '@angular/core';
import { Project } from './project';
import { ProjectsService } from './projects.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  imports: [MatTabsModule, MatCardModule, MatGridListModule, MatChipsModule, MatIconModule, MatExpansionModule],
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [];
  currentIndex = 0;

  constructor(private readonly projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe((data) => {
      this.projects = data;
    });
  }

}
