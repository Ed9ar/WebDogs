import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../../services/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
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

  ngOnInit(): void {
  }

  

}
