import { Routes } from '@angular/router';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';

export const routes: Routes = [
    {
        path: 'inscrire',
        component: PageInscriptionComponent
    },
    {
        path: 'login',
        component: PageLoginComponent
    },
    {
        path: '',
        component: PageDashboardComponent,
        children: [
            {
                path: 'statistiques',
                component: PageStatistiquesComponent
            }
        ]
    }
];
