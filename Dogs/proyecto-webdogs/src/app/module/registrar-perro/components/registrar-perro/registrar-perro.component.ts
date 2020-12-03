import { Component, OnInit } from '@angular/core';
import { RegistrarPerroService } from '../../services/registrar-perro.service';
import { animation, trigger, animateChild, group, transition, animate, style, query, state } from '@angular/animations';
import { Perro } from '../../../../models/perro.model';
import { Subject } from 'rxjs';
import {  takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-registrar-perro',
  templateUrl: './registrar-perro.component.html',
  styleUrls: ['./registrar-perro.component.scss'],
  animations: [
    trigger('childAnimation', [
      // ...
      state('open', style({
        opacity: 0,
      })),
      state('closed', style({
        opacity: 1
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
  ],
})

export class RegistrarPerroComponent implements OnInit {

  perroSeleccionado: any;

  perros: Perro[] = [];

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private registrarperroService: RegistrarPerroService) {}
   

  estilo = false;

  toggle() {
    this.estilo = !this.estilo;
  }
  
  ngOnInit(): void {

    this.registrarperroService.getPerros().pipe(takeUntil(this.destroy$)).subscribe((data: any[])=>{
    this.perros = data;
    console.log(data);
  })  ;
  }


  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }
  

}
// export class RegistrarPerroComponent implements OnInit {

//   registroPerroObjeto: object[] = [];
//   constructor(private registrarperroService: RegistrarPerroService) {
//     registrarperroService.clasePerroAgregadoAnunciada$.subscribe(
//       c=>{
//         this.registroPerroObjeto.push(c)
//         console.log(`Se agrego ${c}`)
//       }
//     )
//   }

//   estilo = false;

//   toggle() {
//     this.estilo = !this.estilo;
//   }

//   ngOnInit(): void {
//   }

// }



