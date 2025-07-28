import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-cv-viewer',
  imports: [TranslatePipe],
  templateUrl: './cv-viewer.component.html',
  styleUrl: './cv-viewer.component.css'
})
export class CvViewerComponent {

}
