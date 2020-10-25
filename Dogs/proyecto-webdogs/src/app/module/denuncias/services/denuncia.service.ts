import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DenunciaService {

  //Los datos que van a cambiar y se notificara
  private denunciaAgregada = new Subject<object>();

  claseDenunciaAgregadaAnunciada$ = this.denunciaAgregada.asObservable();

  agregacionDenuncia(den: object){
    this.denunciaAgregada.next(den);
    console.log("Denuncia agregada");
    console.log(den);
  }
}
