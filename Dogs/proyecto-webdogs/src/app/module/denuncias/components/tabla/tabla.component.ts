import { Component, OnInit } from '@angular/core';
import { DenunciasService } from './../../../../main-services/denuncias.service';
//import { DenunciaService } from './../../services/denuncia.service';

import { Denuncia } from './../../../../models/denuncias';
import {  takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {
  /*denunciasObjeto: object[] = [];
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
  }*/

  
  denunciasObjeto: Denuncia[] = [];

  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private denunciasService: DenunciasService) {}


  estilo = false;

  ngOnInit(): void {

      this.denunciasService.getDenuncias().pipe(takeUntil(this.destroy$)).subscribe((data: any[])=>{
        this.denunciasObjeto = data;
    })  ;
  }


  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  eliminar(id: string){
    console.log(id);
    this.denunciasService.eliminarDenuncia(id);
    this.estilo = !this.estilo;
  }

}
