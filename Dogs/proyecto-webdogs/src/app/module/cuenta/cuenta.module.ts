import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuentaRoutingModule } from './cuenta-routing.module';
import { CuentaEncabezadoComponent } from './components/cuenta-encabezado/cuenta-encabezado.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { CuentaInfoComponent } from './components/cuenta-info/cuenta-info.component';
import { CuentaProcesoComponent } from './components/cuenta-proceso/cuenta-proceso.component';


@NgModule({
  declarations: [CuentaComponent, CuentaEncabezadoComponent, CuentaInfoComponent, CuentaProcesoComponent],
  imports: [
    CommonModule,
    CuentaRoutingModule
  ]
})
export class CuentaModule { }
