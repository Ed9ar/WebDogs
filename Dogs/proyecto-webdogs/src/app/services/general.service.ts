import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Perro } from '../models/perro.model';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  //Los datos que van a cambiar y se notificara
  private usuarioLogueado = new Subject<boolean>();
  private perroInformacion = new Subject<Perro>();

  claseUsuarioLogueado$ = this.usuarioLogueado.asObservable();
  clasePerroInformacion$ = this.perroInformacion.asObservable();

  cambioEstatusUsuario(log: boolean){
    this.usuarioLogueado.next(log);
    console.log("El usuario cambio su estatus");
    console.log(log);
  }

  pasarPerroInformacion(perro: Perro){
    this.perroInformacion.next(perro);
    console.log("Info perro seleccionado");
    console.log(perro);
  }


  
}
