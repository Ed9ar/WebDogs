import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './components/registro/registro.component';
import { RegistroFormularioComponent } from './components/registro-formulario/registro-formulario.component';
import { RegistroRoutingModule } from './registro-routing.module';



@NgModule({
  declarations: [RegistroComponent, RegistroFormularioComponent],
  imports: [
    CommonModule,
    RegistroRoutingModule
  ]
})
export class RegistroModule { }
