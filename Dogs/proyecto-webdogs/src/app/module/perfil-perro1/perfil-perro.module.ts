import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilPerroRoutingModule } from './perfil-perro-routing.module';
import { PerfilPerroComponent } from './components/perfil-perro/perfil-perro.component';
import { PerfilPerroInfoComponent } from './components/perfil-perro-info/perfil-perro-info.component';

@NgModule({
  declarations: [PerfilPerroComponent, PerfilPerroInfoComponent],
  imports: [
    CommonModule,
    PerfilPerroRoutingModule
  ]
})
export class PerfilPerroModule { }
