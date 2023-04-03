import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NouveauCltFrsComponent } from './composants/nouveau-clt-frs/nouveau-clt-frs.component';
import { NouvelleCmdCltFrsComponent } from './composants/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component';
import { NouvelleCategoryComponent } from './pages/categories/nouvelle-category/nouvelle-category.component';
import { PageCategoryComponent } from './pages/categories/page-category/page-category.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/fournisseur/page-fournisseur/page-fournisseur.component';
import { PageMvtstkComponent } from './pages/mvtstk/page-mvtstk/page-mvtstk.component';
import { NouvelArticleComponent } from './pages/page-article/nouvel-article/nouvel-article.component';
import { PageArticleComponent } from './pages/page-article/page-article.component';
import { PageCmdCltFrsComponent } from './pages/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageStatistiqueComponent } from './pages/page-statistique/page-statistique.component';
import { PageUtilisateurComponent } from './pages/utilisateur/page-utilisateur/page-utilisateur.component';

const routes: Routes = [
  {
    path: 'login',
    component: PageLoginComponent
  },
  {
    path:'register',
    component:PageInscriptionComponent
  },
  {
    path:'',
      component:PageDashboardComponent,
    children:[
      {
        path:'statistique',
        component:PageStatistiqueComponent
      },
      {
        path:'articles',
        component:PageArticleComponent
      },
      {
        path:'nouvelarticle',
        component:NouvelArticleComponent
      },
      {
        path:'mvtstk',
        component:PageMvtstkComponent
      },
      {
        path:'client',
        component:PageClientComponent
      },
      {
        path:'nouveauclient',
        component:NouveauCltFrsComponent
      },
      {
        path:'commandesclient',
        component:PageCmdCltFrsComponent
      },
      {
        path:'nouvellecommandeclt',
        component:NouvelleCmdCltFrsComponent
      },
      {
        path:'fournisseurs',
        component:PageFournisseurComponent
      },
      {
        path:'nouveaufournisseur',
      component:NouveauCltFrsComponent
      },
      {
        path:'commandesfournisseurs',
        component:PageCmdCltFrsComponent
      },
      {
        path:'nouvellecommandefrs',
        component:NouvelleCmdCltFrsComponent
      },
      {
        path:'categories',
        component:PageCategoryComponent
      },
      {
        path: 'nouvellecategorie',
        component: NouvelleCategoryComponent
      },
      {
        path: 'utilisateurs',
        component: PageUtilisateurComponent
      },
      {
        path: 'nouvelutilisateur',
        component: NouvelleCategoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }