import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DockComponent } from './dock/dock.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tvelu77.github.io';
}
