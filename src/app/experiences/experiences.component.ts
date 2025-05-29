import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Experience } from '../commons/experience';
import { ExperienceService } from './experience.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { Period } from '../commons/period';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-experiences',
  imports: [MatCardModule, MatButtonModule, MatExpansionModule, MatListModule, MatIconModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {

  experiences: Experience[] = [];

  constructor(private readonly experienceService: ExperienceService) {}

  ngOnInit() {
    this.experienceService.getJson().subscribe(data => {
      for (let experience of data) {
        let startDate = new Date(experience.period.startDate);
        let endDate = experience.period.endDate ? new Date(experience.period.endDate) : undefined;
        let correctedPeriod = new Period(startDate, endDate);
        let correctedExperience = new Experience(experience.title,
          experience.location,
          correctedPeriod,
          experience.description,
          experience.details,
          experience.type);
        this.experiences.push(correctedExperience);
      }
    });
  }

}
