import { Component, OnInit } from '@angular/core';
import { DenunciaService } from './../../services/denuncia.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {
  denunciasObjeto: object[] = [];
  indice = 0;

  constructor(private denunciaService: DenunciaService) {
    denunciaService.claseDenunciaAgregadaAnunciada$.subscribe(
      d=>{
        this.denunciasObjeto.push(d)
        console.log(`Se agrego ${d}`)
      }
    )
   }

  ngOnInit(): void {
  }

  

}
