import { Component, OnInit } from '@angular/core';
import { RegistrarPerroService } from '../../services/registrar-perro.service';

@Component({
  selector: 'app-registrar-perro',
  templateUrl: './registrar-perro.component.html',
  styleUrls: ['./registrar-perro.component.scss']
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

  ngOnInit(): void {
  }

}
