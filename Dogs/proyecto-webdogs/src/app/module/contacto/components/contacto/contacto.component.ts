import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../../services/contacto.service';
import { animation, trigger, animateChild, group, transition, animate, style, query, state } from '@angular/animations';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
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
export class ContactoComponent implements OnInit {

  contactosObjeto: object[] = [];
  constructor(private contactoService: ContactoService) {
    contactoService.claseContactoAgregadoAnunciada$.subscribe(
      c=>{
        this.contactosObjeto.push(c)
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
