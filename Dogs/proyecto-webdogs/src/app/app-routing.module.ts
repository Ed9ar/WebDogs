import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './main-components/content/content.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {path:'', component:ContentComponent},
  {
    path:'conoce',
    loadChildren: './module/conoce/conoce.module#ConoceModule',
    data: { animationState: 'Conoce' }, canActivate:[AuthGuard]
  },{
    path:'denuncias',
    loadChildren: './module/denuncias/denuncias.module#DenunciasModule',
    data: { animationState: 'Denuncias' }, canActivate:[AuthGuard]
  },{
    path:'contacto',
    loadChildren: './module/contacto/contacto.module#ContactoModule',
    data: { animationState: 'Contacto' }, canActivate:[AuthGuard]
  },{
    path:'cuenta',
    loadChildren: './module/cuenta/cuenta.module#CuentaModule',
    data: { animationState: 'Cuenta' }, canActivate:[AuthGuard]
  },{
    path:'registro',
    loadChildren: './module/registro/registro.module#RegistroModule',
    data: { animationState: 'Registro' }, canActivate:[AuthGuard]
  },{
    path:'login',
    loadChildren: './module/login/login.module#LoginModule',
    data: { animationState: 'Login' }, canActivate:[AuthGuard]
  },{
    path:'registrarPerro',
    loadChildren: './module/registrar-perro/registrar-perro.module#RegistrarPerroModule',
    data: { animationState: 'RegistroPerro' }, canActivate:[AuthGuard]
  },{
    path:'familias',
    loadChildren: './module/familias/familias.module#FamiliasModule',
    data: { animationState: 'Familias' }, canActivate:[AuthGuard]
  },{
    path:'main',
    loadChildren: './module/main/main.module#MainModule',
    data: { animationState: 'Inicio' }, canActivate:[AuthGuard]
  },{
    path:'perfil-perro',
    loadChildren: './module/perfil-perro1/perfil-perro.module#PerfilPerroModule',
    data: { animationState: 'PerfilPerro' }, canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
