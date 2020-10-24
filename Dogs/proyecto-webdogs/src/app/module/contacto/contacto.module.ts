import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoEncabezadoComponent } from './components/contacto-encabezado/contacto-encabezado.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ContactoFormComponent } from './components/contacto-form/contacto-form.component';
import {  ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ContactoComponent, ContactoEncabezadoComponent, ContactoFormComponent],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContactoModule { }
