import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-about-me',
  imports: [MatGridListModule, MatCardModule, MatDividerModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate('1s', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AboutMeComponent {
  description = "Software Engineer | Java Specialist";
}
