import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilPerroComponent } from './components/perfil-perro/perfil-perro.component';

const routes: Routes = [
  {path:'', component: PerfilPerroComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilPerroRoutingModule { }
