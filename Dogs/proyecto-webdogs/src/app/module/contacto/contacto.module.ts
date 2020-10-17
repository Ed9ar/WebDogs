import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoEncabezadoComponent } from './components/contacto-encabezado/contacto-encabezado.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ContactoFormComponent } from './components/contacto-form/contacto-form.component';


@NgModule({
  declarations: [ContactoComponent, ContactoEncabezadoComponent, ContactoFormComponent],
  imports: [
    CommonModule,
    ContactoRoutingModule
  ]
})
export class ContactoModule { }
