import { PageCommandeClientsFournisseursComponent } from './pages/page-commande-clients-fournisseurs/page-commande-clients-fournisseurs.component';
import { Routes } from '@angular/router';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageMwtskComponent } from './pages/mvtsk/page-mwtsk/page-mwtsk.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/fournisseur/page-fournisseur/page-fournisseur.component';
import { NouveauClientFournisseurComponent } from './composants/nouveau-client-fournisseur/nouveau-client-fournisseur.component';

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
            },
            {
                path: 'articles',
                component: PageArticleComponent
            },
            {
                path: 'nouvel-article',
                component: NouvelArticleComponent
            },
            {
                path: 'mouvementstock',
                component: PageMwtskComponent
            },
            {
                path: 'clients',
                component: PageClientComponent
            },
            {
                path: 'nouveau-client',
                component: NouveauClientFournisseurComponent
            },
            {
                path: 'commande-client',
                component: PageCommandeClientsFournisseursComponent
            },
            {
                path: 'fournisseurs',
                component: PageFournisseurComponent
            },
            {
                path: 'nouveau-fournisseur',
                component: NouveauClientFournisseurComponent
            },
            {
                path: 'commande-fournisseur',
                component: PageCommandeClientsFournisseursComponent
            },
        ]
    }
];
