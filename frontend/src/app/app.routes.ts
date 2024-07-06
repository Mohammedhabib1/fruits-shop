import { Routes } from '@angular/router';
import { homeRoutes } from '../pages/home.routes';
import { RootComponent } from './root/root.component';

export const routes: Routes = [
    {
        path: '', component:RootComponent,
        children: homeRoutes
    },
    {
        path: 'dashboard', 
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: '**', redirectTo: ''
    }
];
