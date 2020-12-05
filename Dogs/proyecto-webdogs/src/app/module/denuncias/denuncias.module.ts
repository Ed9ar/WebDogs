import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DenunciasRoutingModule } from './denuncias-routing.module';
import { TablaComponent } from './components/tabla/tabla.component';
import { DenunciasComponent } from './components/denuncias/denuncias.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { CerrarSesionComponent } from './components/cerrar-sesion/cerrar-sesion.component';
import { EditarComponent } from './components/editar/editar.component';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';


@NgModule({
  declarations: [TablaComponent, DenunciasComponent, MapaComponent, FormularioComponent, CerrarSesionComponent, EditarComponent],
  imports: [
    CommonModule,
    DenunciasRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class DenunciasModule { }
