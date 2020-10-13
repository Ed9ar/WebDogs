import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConoceRoutingModule } from './conoce-routing.module';
import { InfoRightComponent } from './components/info-right/info-right.component';
import { InfoLeftComponent } from './components/info-left/info-left.component';
import { StepsComponent } from './components/steps/steps.component';
import { ConoceComponent } from './components/conoce/conoce.component';


@NgModule({
  declarations: [InfoRightComponent, InfoLeftComponent, StepsComponent, ConoceComponent],
  imports: [
    CommonModule,
    ConoceRoutingModule
  ]
})
export class ConoceModule { }
