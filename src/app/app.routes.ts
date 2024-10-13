import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectListComponent } from './project-list/project-list.component';

export const routes: Routes = [
    {
        path: 'about-me',
        component: AboutMeComponent,
    },
    {
        path: 'projects',
        component: ProjectListComponent,
    }
];
