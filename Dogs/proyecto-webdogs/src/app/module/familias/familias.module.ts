import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamiliasRoutingModule } from './familias-routing.module';
import { FamiliasComponent } from './components/familias/familias.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [CarrouselComponent, FamiliasComponent, FooterComponent],
  imports: [
    CommonModule,
    FamiliasRoutingModule
  ]
})
export class FamiliasModule { }
