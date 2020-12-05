import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../services/general.service';
import { Perro } from '../../../../models/perro.model';

@Component({
  selector: 'perfil-perro-info',
  templateUrl: './perfil-perro-info.component.html',
  styleUrls: ['./perfil-perro-info.component.scss']
})
export class PerfilPerroInfoComponent implements OnInit {

  perroObjeto: Perro;
  pSeleccion:any;

  constructor(private generalService: GeneralService) {
    generalService.clasePerroInformacion$.subscribe(
      p=>{
        this.perroObjeto= p;
        console.log(this.perroObjeto);
        this.perroSeleccionado(p);
      }
    )
   }

  perroSeleccionado(p:Perro){
    this.pSeleccion = p;
    console.log("pseleccion");
    console.log(this.pSeleccion);
  }

  ngOnInit(): void {
  }

}
