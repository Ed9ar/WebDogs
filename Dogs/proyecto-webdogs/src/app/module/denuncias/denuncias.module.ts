import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DenunciasRoutingModule } from './denuncias-routing.module';
import { TablaComponent } from './components/tabla/tabla.component';
import { DenunciasComponent } from './components/denuncias/denuncias.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { FormularioComponent } from './components/formulario/formulario.component';


@NgModule({
  declarations: [TablaComponent, DenunciasComponent, MapaComponent, FormularioComponent],
  imports: [
    CommonModule,
    DenunciasRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DenunciasModule { }
