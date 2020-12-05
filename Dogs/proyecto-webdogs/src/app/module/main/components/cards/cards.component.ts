import { Component, OnInit } from '@angular/core';
import { PerrosService } from '../../../../main-services/perros.service';
import { GeneralService } from '../../../../services/general.service';

import { Perro } from '../../../../models/perro.model';
import {  takeUntil } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  perrosObjeto: Perro[] = [];

  confirmada = false;

  subscribe: Subscription;

  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private perrosService: PerrosService, private generalService: GeneralService) {}


  estilo = false;

  ngOnInit(): void {

      this.perrosService.getPerros().pipe(takeUntil(this.destroy$)).subscribe((data: any[])=>{
        this.perrosObjeto = data;
        console.log(data);
    })  ;
  }


  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  enviarPerro(perro : Perro){
    this.confirmada = true;
    this.generalService.pasarPerroInformacion(perro);
  }

}
