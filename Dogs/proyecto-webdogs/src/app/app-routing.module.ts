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
  },{
    path:'contacto',
    loadChildren: './module/contacto/contacto.module#ContactoModule'
  },{
    path:'cuenta',
    loadChildren: './module/cuenta/cuenta.module#CuentaModule'
  },{
    path:'registro',
    loadChildren: './module/registro/registro.module#RegistroModule'
  },{
    path:'login',
    loadChildren: './module/login/login.module#LoginModule'
  },{
    path:'registrarPerro',
    loadChildren: './module/registrar-perro/registrar-perro.module#RegistrarPerroModule'
  },{
    path:'familias',
    loadChildren: './module/familias/familias.module#FamiliasModule'
  },{
    path:'main',
    loadChildren: './module/main/main.module#MainModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
