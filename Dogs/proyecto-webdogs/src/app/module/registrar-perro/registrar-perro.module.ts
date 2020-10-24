import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarPerroRoutingModule } from './registrar-perro-routing.module';
import { RegistrarPerroComponent } from './components/registrar-perro/registrar-perro.component';
import { RegistrarPerroFormularioComponent } from './components/registrar-perro-formulario/registrar-perro-formulario.component';
import {  ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [RegistrarPerroComponent, RegistrarPerroFormularioComponent],
  imports: [
    CommonModule,
    RegistrarPerroRoutingModule,
    ReactiveFormsModule
  ]
})
export class RegistrarPerroModule { }
