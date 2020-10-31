import { Component, OnInit } from '@angular/core';
import { RegistrarPerroService } from '../../services/registrar-perro.service';
import { animation, trigger, animateChild, group, transition, animate, style, query, state } from '@angular/animations';

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

  registroPerroObjeto: object[] = [];
  constructor(private registrarperroService: RegistrarPerroService) {
    registrarperroService.clasePerroAgregadoAnunciada$.subscribe(
      c=>{
        this.registroPerroObjeto.push(c)
        console.log(`Se agrego ${c}`)
      }
    )
  }

  estilo = false;

  toggle() {
    this.estilo = !this.estilo;
  }

  ngOnInit(): void {
  }

}
