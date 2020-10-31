import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  //Los datos que van a cambiar y se notificara
  private usuarioLogueado = new Subject<boolean>();

  claseUsuarioLogueado$ = this.usuarioLogueado.asObservable();

  cambioEstatusUsuario(log: boolean){
    this.usuarioLogueado.next(log);
    console.log("El usuario cambio su estatus");
    console.log(log);
  }
  
}
