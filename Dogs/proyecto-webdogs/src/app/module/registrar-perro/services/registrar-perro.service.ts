import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Perro } from 'src/app/models/perro.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrarPerroService {
  private perroId = new Subject<number>();
  private nombrePerro = new Subject<string>();
  private raza = new Subject<string>();
  private tamanio = new Subject<string>();
  private edad = new Subject<number>();
  private correoContacto = new Subject<string>();
  private descripcion = new Subject<string>();

  perroIdAceptado$ = this.perroId.asObservable();
  nombrePerroAceptado$ = this.nombrePerro.asObservable();
  razaAceptado$ = this.raza.asObservable();
  tamanioAceptado$ = this.tamanio.asObservable();
  edadAceptado$ = this.edad.asObservable();
  correoContactoAceptado$ = this.correoContacto.asObservable();
  descripcionAceptado$ = this.descripcion.asObservable();

  perroList: Array<Perro> = ([
    { perroId: 1, nombrePerro: 'Manzana', raza: 'pug' , tamanio: 'pequeño' ,edad: 12, correoContacto: 'a@a.com',  descripcion: 'Lindo' },
    { perroId: 2, nombrePerro: 'Gato', raza: 'boxer' , tamanio: 'mediano' ,edad: 3, correoContacto: 'b@b.com',  descripcion: 'Bonito' },
    { perroId: 3, nombrePerro: 'Rex', raza: 'pastor aleman' , tamanio: 'grande' ,edad: 8, correoContacto: 'c@c.com',  descripcion: 'Cariñoso' },
    { perroId: 4, nombrePerro: 'Nico', raza: 'dalmata' , tamanio: 'grande' ,edad: 10, correoContacto: 'd@d.com',  descripcion: 'jugueton' }

  ])
  constructor() { }

  registrarId(id: number) {
    this.perroId.next(id);
  }

  registrarNombre(nombre: string) {
    this.nombrePerro.next(nombre);
  }

  registrarRaza(razaPerro: string) {
    this.raza.next(razaPerro);
  }

  registrarTamanio(tamanioPerro: string) {
    this.tamanio.next(tamanioPerro);
  }
  registrarEdad(edadPerro: number) {
    this.edad.next(edadPerro);
  }

  registrarCorreoContacto(mailContacto: string) {
    this.correoContacto.next(mailContacto);
  }

  registrarDescripcion(descripcionPerro: string) {
    this.descripcion.next(descripcionPerro);
  }

  get() {
    return this.perroList;
  }
}
