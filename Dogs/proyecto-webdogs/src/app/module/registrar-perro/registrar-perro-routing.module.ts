import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarPerroComponent } from './components/registrar-perro/registrar-perro.component';

const routes: Routes = [
  {path:'', component: RegistrarPerroComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrarPerroRoutingModule { }
