import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  imports: [MatIconModule, MatTooltipModule],
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
}
