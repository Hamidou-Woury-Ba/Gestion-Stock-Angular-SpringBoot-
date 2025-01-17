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
import { NouvelleCommandeClientsFournisseursComponent } from './composants/nouvelle-commande-clients-fournisseurs/nouvelle-commande-clients-fournisseurs.component';
import { PageCategorieComponent } from './pages/categories/page-categorie/page-categorie.component';
import { PageUtilisateurComponent } from './pages/utilisateur/page-utilisateur/page-utilisateur.component';
import { NouvelUtilisateurComponent } from './pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { ChangerMotDePasseComponent } from './pages/profil/changer-mot-de-passe/changer-mot-de-passe.component';
import { NouvelleCategorieComponent } from './pages/categories/nouvelle-categorie/nouvelle-categorie.component';

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
                component: NouveauClientFournisseurComponent,
                data:{
                    origin: 'client'
                }
            },
            {
                path: 'commande-client',
                component: PageCommandeClientsFournisseursComponent,
                data:{
                    origin: 'client'
                }
            },
            {
                path: 'nouvelle-commande-client',
                component: NouvelleCommandeClientsFournisseursComponent,
                data:{
                    origin: 'client'
                }
            },
            {
                path: 'fournisseurs',
                component: PageFournisseurComponent
            },
            {
                path: 'nouveau-fournisseur',
                component: NouveauClientFournisseurComponent,
                data:{
                    origin: 'fournisseur'
                }
            },
            {
                path: 'commande-fournisseur',
                component: PageCommandeClientsFournisseursComponent,
                data:{
                    origin: 'fournisseur'
                }
            },
            {
                path: 'nouvelle-commande-fournisseur',
                component: NouvelleCommandeClientsFournisseursComponent,
                data:{
                    origin: 'fournisseur'
                }
            },
            {
                path: 'categorie',
                component: PageCategorieComponent
            },
            {
                path: 'nouvelle-categorie',
                component: NouvelleCategorieComponent
            },
            {
                path: 'utilisateurs',
                component: PageUtilisateurComponent
            },
            {
                path: 'nouvel-utilisateur',
                component: NouvelUtilisateurComponent
            },
            {
                path: 'profil',
                component: PageProfilComponent
            },
            {
                path: 'changer-mot-de-passe',
                component: ChangerMotDePasseComponent
            },
        ]
    }
];
