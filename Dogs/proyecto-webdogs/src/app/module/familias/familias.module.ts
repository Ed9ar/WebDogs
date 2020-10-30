import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { FamiliasRoutingModule } from './familias-routing.module';
import { FamiliasComponent } from './components/familias/familias.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [CarrouselComponent, FamiliasComponent, FooterComponent],
  imports: [
    CommonModule,
    FamiliasRoutingModule,
    NgbModule
  ]
})
export class FamiliasModule { }
