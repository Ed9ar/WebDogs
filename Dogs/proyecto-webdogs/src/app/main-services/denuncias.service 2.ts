import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Denuncia } from '../models/denuncias';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';

import { map, retry, catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DenunciasService {

  endpoint = 'http://localhost:3000/api/denuncia';

  constructor(private http: HttpClient) {}

  private extraData(res: Response) {
    let body = res;

    return body || {};
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getDenuncias() {
    console.log("en el servicio")
    return this.http.get<Denuncia[]>(this.endpoint).pipe(retry(3),catchError(this.handleError));
  }

  insertarDenuncia(denuncias: Denuncia) {
    this.http.post<Denuncia>(this.endpoint, denuncias).subscribe({
      next: data => {
            console.log("datos",data)
        },
        error: error => {

            console.error(' error!', error);
        }
    })
  }

  eliminarDenuncia(id: string) {
    this.http.delete(this.endpoint+"/"+id).subscribe({
      next: data => {
            console.log("datos",data)
        },
        error: error => {
            console.error(' error!', error);
        }
    })
  }


}
