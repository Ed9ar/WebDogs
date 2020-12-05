import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Perro } from '../../../models/perro.model';
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
export class RegistrarPerroService {

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
    window.alert(errorMessage); 
    return throwError(errorMessage);
  }

  
  
  getPerros(){
    console.log("en el servicio");
    return this.http.get<Perro[]>(this.endpoint).pipe(retry(3), catchError(this.handleError));
  }

  
  private perroAgregado = new Subject<object>();

  clasePerroAgregadoAnunciada$ = this.perroAgregado.asObservable();


  insertarPerro(fd:FormData){
    
    this.http.post<FormData>(this.endpoint, fd).subscribe({
      next: data =>{
        console.log("datos", data);
        window.alert("Se ha registrado perro con éxito"); //Meter mensaje bonito de éxito
      },error: error =>{
        console.error( ' error!', error);
        window.alert("OOPS! esto no ha salido bien, ingresar nuevamente"); 
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