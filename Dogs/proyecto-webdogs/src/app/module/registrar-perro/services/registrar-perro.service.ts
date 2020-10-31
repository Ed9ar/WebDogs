import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrarPerroService {

  private perroAgregado = new Subject<object>();

  clasePerroAgregadoAnunciada$ = this.perroAgregado.asObservable();

  agregacionPerro(perro: object){
    this.perroAgregado.next(perro);
    console.log("Perro agregado");
    console.log(perro);
  }
  

 
}
