import { Component, OnInit } from '@angular/core';
import { PerrosService } from '../../../../main-services/perros.service';

import { Perro } from '../../../../models/perro.model';
import {  takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  perrosObjeto: Perro[] = [];

  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private perrosService: PerrosService) {}


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

}
