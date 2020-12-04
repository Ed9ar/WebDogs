import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../services/general.service';
import { Perro } from '../../../../models/perro.model';

@Component({
  selector: 'app-perfil-perro',
  templateUrl: './perfil-perro.component.html',
  styleUrls: ['./perfil-perro.component.scss']
})
export class PerfilPerroComponent implements OnInit {

  perroObjeto: Perro;

  constructor(private generalService: GeneralService) {
    generalService.clasePerroInformacion$.subscribe(
      p=>{
        this.perroObjeto = p;
      }
    )
   }

  ngOnInit(): void {
  }

}
