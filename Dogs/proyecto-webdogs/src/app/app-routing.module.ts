import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './main-components/content/content.component';

const routes: Routes = [
  {path:'', component:ContentComponent},
  {
    path:'conoce', 
    loadChildren: './module/conoce/conoce.module#ConoceModule'
  },{
    path:'denuncias', 
    loadChildren: './module/denuncias/denuncias.module#DenunciasModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
