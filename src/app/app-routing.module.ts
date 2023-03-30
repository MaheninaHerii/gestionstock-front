import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageArticleComponent } from './pages/page-article/page-article.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageStatistiqueComponent } from './pages/page-statistique/page-statistique.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }