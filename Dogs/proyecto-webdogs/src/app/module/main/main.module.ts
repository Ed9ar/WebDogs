import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { CardsComponent } from './components/cards/cards.component';
import { MainComponent } from './components/main/main.component';


@NgModule({
  declarations: [CardsComponent, MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
