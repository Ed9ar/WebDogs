import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Perro } from '../models/perro.model';
import { Observable, of, throwError } from 'rxjs';

import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';

import { map, retry, catchError, tap } from 'rxjs/operators';
import { $ } from 'protractor';
import { createIncrementalCompilerHost } from 'typescript';


@Injectable({
  providedIn: 'root'
})
export class PerrosService {

  endpoint = 'http://localhost:3000/api/perro';

  constructor(private http: HttpClient){}

  private extraData(res: Response){
    let body = res;

    return body || {};
  }

  /*
  private perroAgregado = new Subject<object>();

  clasePerroAgregadoAnunciada$ = this.perroAgregado.asObservable();
  */

  handleError(error: HttpErrorResponse){
    let errorMessage = 'Unknown error';
    if(error.error instanceof ErrorEvent){
      errorMessage = `Error: ${error.error.message}`;
    }else{
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage); //Meter gui bonitas
    return throwError(errorMessage);
  }



  getPerros(){

    const headers = { 'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InpqN3h0aEtwX1N1QlloaG4waThWVSJ9.eyJpc3MiOiJodHRwczovL2Rldi01NWFyYWc4ZC51cy5hdXRoMC5jb20vIiwic3ViIjoiQjNraU1XTTFpb25yWmlCRnViak9oTDhEZFZ1MkRpNW5AY2xpZW50cyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8iLCJpYXQiOjE2MDcxMzUzNzUsImV4cCI6MTYwNzIyMTc3NSwiYXpwIjoiQjNraU1XTTFpb25yWmlCRnViak9oTDhEZFZ1MkRpNW4iLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.g2R9xXeyKdoOC_9Q1nHCbAwrNqEbXdUjQEup04g1kdkepx0f2Q38imqdjdYi02ZddeWQhca4RnpUzPhcfYR3L7uJemV_OWEwc3UiqHjyFEUhFi3kqZ1CoYPe4dV9g6YHD4NYMCSP1fnqBBiow2khO0XHotr5F_ogKDNAk8UbiMyxCbvLjXLrFBSL-Vw0EgUOZXAbHTmoEjffUQNqgToDakpQLRD8JNnejpnJTO_7x521A-_s2buGZeihQSaD0xo7FeKSidjhwaUYCaqhlrHwqJObQXo6n48EIg4VixIIksdxQlGaCzWaTr0rJbxpscNSiRWmJwWQkrbVnfIp3Bknyg`, "Content-Type": "application/x-www-form-urlencoded" }


    console.log("en el servicio");
    return this.http.get<Perro[]>(this.endpoint, {headers}).pipe(retry(3), catchError(this.handleError));
  }


  private perroAgregado = new Subject<object>();

  clasePerroAgregadoAnunciada$ = this.perroAgregado.asObservable();


  insertarPerro(perros: Perro){
    const headers = { 'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InpqN3h0aEtwX1N1QlloaG4waThWVSJ9.eyJpc3MiOiJodHRwczovL2Rldi01NWFyYWc4ZC51cy5hdXRoMC5jb20vIiwic3ViIjoiQjNraU1XTTFpb25yWmlCRnViak9oTDhEZFZ1MkRpNW5AY2xpZW50cyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8iLCJpYXQiOjE2MDcxMzUzNzUsImV4cCI6MTYwNzIyMTc3NSwiYXpwIjoiQjNraU1XTTFpb25yWmlCRnViak9oTDhEZFZ1MkRpNW4iLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.g2R9xXeyKdoOC_9Q1nHCbAwrNqEbXdUjQEup04g1kdkepx0f2Q38imqdjdYi02ZddeWQhca4RnpUzPhcfYR3L7uJemV_OWEwc3UiqHjyFEUhFi3kqZ1CoYPe4dV9g6YHD4NYMCSP1fnqBBiow2khO0XHotr5F_ogKDNAk8UbiMyxCbvLjXLrFBSL-Vw0EgUOZXAbHTmoEjffUQNqgToDakpQLRD8JNnejpnJTO_7x521A-_s2buGZeihQSaD0xo7FeKSidjhwaUYCaqhlrHwqJObQXo6n48EIg4VixIIksdxQlGaCzWaTr0rJbxpscNSiRWmJwWQkrbVnfIp3Bknyg`, "Content-Type": "application/x-www-form-urlencoded" }


    this.http.post<Perro>(this.endpoint, perros, {headers}).subscribe({
      next: data =>{
        console.log("datos", data);
      },error: error =>{
        console.error( ' error!', error);
      }

    })
  }

  /*
  updatePerro(perros: Perro, id:String){
    this.http.put<Perro>(this.endpoint+"/"+id, perros).subscribe({
      next: data =>{
        console.log("datos", data);
      },error: error =>{
        console.error( ' error!', error);
      }

    })
  }

  deletePerro(id:String){
    this.http.delete(this.endpoint+"/"+id).subscribe({
      next: data =>{
        console.log("datos", data);
      },error: error =>{
        console.error( ' error!', error);
      }

    })
  }*/
}
