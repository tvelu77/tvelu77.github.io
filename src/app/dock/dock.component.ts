import { Component } from '@angular/core';
import { DockModule } from 'primeng/dock';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

@Component({
  selector: 'app-dock',
  standalone: true,
  imports: [DockModule, AvatarModule, AvatarGroupModule],
  templateUrl: './dock.component.html',
  styleUrl: './dock.component.css'
})
export class DockComponent {
  items = [
    {
      label: 'About me',
      icon: 'pi pi-user',
      style: {
        'background-color': '#1dd9b4',
        'color': '#ffffff',
      },
      link: '#',
    },
    {
      label: 'Projects',
      icon: 'pi pi-folder-open',
      style: {
        'background-color': '#dc5858',
        'color': '#ffffff',
      },
      link: '#',
    },
    {
      label: 'Experiences',
      icon: 'pi pi-briefcase',
      style: {
        'background-color': '#589adc',
        'color': '#ffffff',
      },
      link: '#',
    },
    {
      label: 'Settings',
      icon: 'pi pi-cog',
      style: {
        'background-color': '#80ec30',
        'color': '#ffffff',
      },
      link: '#',
    },
  ]
}
