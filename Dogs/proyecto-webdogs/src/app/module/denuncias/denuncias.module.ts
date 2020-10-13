import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DenunciasRoutingModule } from './denuncias-routing.module';
import { TablaComponent } from './components/tabla/tabla.component';
import { DenunciasComponent } from './components/denuncias/denuncias.component';
import { MapaComponent } from './components/mapa/mapa.component';


@NgModule({
  declarations: [TablaComponent, DenunciasComponent, MapaComponent],
  imports: [
    CommonModule,
    DenunciasRoutingModule
  ]
})
export class DenunciasModule { }
