import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private nombre = new Subject<string>();
  private correo = new Subject<string>();
  private conociste = new Subject<string>();
  private inquietudes = new Subject<string>();

  nombreAceptado$ = this.nombre.asObservable();
  correoAceptado$ = this.correo.asObservable();
  conocisteAceptado$ = this.conociste.asObservable();
  inquietudesAceptado$ = this.inquietudes.asObservable();

  constructor() { }

  registrarNombreContacto(nombreUsuarioContacto: string) {
    this.nombre.next(nombreUsuarioContacto);
  }
  registrarCorreoCont(correoCont: string) {
    this.correo.next(correoCont);
  }
  registrarConociste(conocisteContacto: string) {
    this.conociste.next(conocisteContacto);
  }
  registrarInquietudes(inquietudesContacto: string) {
    this.inquietudes.next(inquietudesContacto);
  }
}
