import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './main-components/content/content.component';

const routes: Routes = [
  {path:'', component:ContentComponent},
  {
    path:'conoce',
    loadChildren: './module/conoce/conoce.module#ConoceModule',
    data: { animationState: 'Conoce' }
  },{
    path:'denuncias',
    loadChildren: './module/denuncias/denuncias.module#DenunciasModule',
    data: { animationState: 'Denuncias' }
  },{
    path:'contacto',
    loadChildren: './module/contacto/contacto.module#ContactoModule',
    data: { animationState: 'Contacto' }
  },{
    path:'cuenta',
    loadChildren: './module/cuenta/cuenta.module#CuentaModule',
    data: { animationState: 'Cuenta' }
  },{
    path:'registro',
    loadChildren: './module/registro/registro.module#RegistroModule',
    data: { animationState: 'Registro' }
  },{
    path:'login',
    loadChildren: './module/login/login.module#LoginModule',
    data: { animationState: 'Login' }
  },{
    path:'registrarPerro',
    loadChildren: './module/registrar-perro/registrar-perro.module#RegistrarPerroModule',
    data: { animationState: 'RegistroPerro' }
  },{
    path:'familias',
    loadChildren: './module/familias/familias.module#FamiliasModule',
    data: { animationState: 'Familias' }
  },{
    path:'main',
    loadChildren: './module/main/main.module#MainModule',
    data: { animationState: 'Inicio' }
  },{
    path:'perfil-perro',
    loadChildren: './module/perfil-perro1/perfil-perro.module#PerfilPerroModule',
    data: { animationState: 'PerfilPerro' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
