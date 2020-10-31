import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  //Los datos que van a cambiar y se notificara
  private contactoAgregado = new Subject<object>();

  claseContactoAgregadoAnunciada$ = this.contactoAgregado.asObservable();

  agregacionContacto(contact: object){
    this.contactoAgregado.next(contact);
    console.log("Contacto agregado");
    console.log(contact);
  }
}
