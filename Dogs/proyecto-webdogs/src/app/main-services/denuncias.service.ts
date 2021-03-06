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

        const headers = { 'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InpqN3h0aEtwX1N1QlloaG4waThWVSJ9.eyJpc3MiOiJodHRwczovL2Rldi01NWFyYWc4ZC51cy5hdXRoMC5jb20vIiwic3ViIjoiQjNraU1XTTFpb25yWmlCRnViak9oTDhEZFZ1MkRpNW5AY2xpZW50cyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8iLCJpYXQiOjE2MDcxMzUzNzUsImV4cCI6MTYwNzIyMTc3NSwiYXpwIjoiQjNraU1XTTFpb25yWmlCRnViak9oTDhEZFZ1MkRpNW4iLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.g2R9xXeyKdoOC_9Q1nHCbAwrNqEbXdUjQEup04g1kdkepx0f2Q38imqdjdYi02ZddeWQhca4RnpUzPhcfYR3L7uJemV_OWEwc3UiqHjyFEUhFi3kqZ1CoYPe4dV9g6YHD4NYMCSP1fnqBBiow2khO0XHotr5F_ogKDNAk8UbiMyxCbvLjXLrFBSL-Vw0EgUOZXAbHTmoEjffUQNqgToDakpQLRD8JNnejpnJTO_7x521A-_s2buGZeihQSaD0xo7FeKSidjhwaUYCaqhlrHwqJObQXo6n48EIg4VixIIksdxQlGaCzWaTr0rJbxpscNSiRWmJwWQkrbVnfIp3Bknyg`, "Content-Type": "application/x-www-form-urlencoded" }


    console.log("en el servicio")
    return this.http.get<Denuncia[]>(this.endpoint, {headers}).pipe(retry(3),catchError(this.handleError));
  }

  insertarDenuncia(denuncias: Denuncia) {

        const headers = { 'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InpqN3h0aEtwX1N1QlloaG4waThWVSJ9.eyJpc3MiOiJodHRwczovL2Rldi01NWFyYWc4ZC51cy5hdXRoMC5jb20vIiwic3ViIjoiQjNraU1XTTFpb25yWmlCRnViak9oTDhEZFZ1MkRpNW5AY2xpZW50cyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8iLCJpYXQiOjE2MDcxMzUzNzUsImV4cCI6MTYwNzIyMTc3NSwiYXpwIjoiQjNraU1XTTFpb25yWmlCRnViak9oTDhEZFZ1MkRpNW4iLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.g2R9xXeyKdoOC_9Q1nHCbAwrNqEbXdUjQEup04g1kdkepx0f2Q38imqdjdYi02ZddeWQhca4RnpUzPhcfYR3L7uJemV_OWEwc3UiqHjyFEUhFi3kqZ1CoYPe4dV9g6YHD4NYMCSP1fnqBBiow2khO0XHotr5F_ogKDNAk8UbiMyxCbvLjXLrFBSL-Vw0EgUOZXAbHTmoEjffUQNqgToDakpQLRD8JNnejpnJTO_7x521A-_s2buGZeihQSaD0xo7FeKSidjhwaUYCaqhlrHwqJObQXo6n48EIg4VixIIksdxQlGaCzWaTr0rJbxpscNSiRWmJwWQkrbVnfIp3Bknyg`, "Content-Type": "application/x-www-form-urlencoded" }


    this.http.post<Denuncia>(this.endpoint, denuncias, {headers}).subscribe({
      next: data => {
            console.log("datos",data)
            window.alert("Tu denuncia se ha reportado");
        },
        error: error => {

            console.error(' error!', error);
            window.alert("Ooops, intenta de nuevo por favor");
        }
    })
  }

  editarDenuncia(denuncias: Denuncia, id:string) {
    const headers = { 'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InpqN3h0aEtwX1N1QlloaG4waThWVSJ9.eyJpc3MiOiJodHRwczovL2Rldi01NWFyYWc4ZC51cy5hdXRoMC5jb20vIiwic3ViIjoiQjNraU1XTTFpb25yWmlCRnViak9oTDhEZFZ1MkRpNW5AY2xpZW50cyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8iLCJpYXQiOjE2MDcxMzUzNzUsImV4cCI6MTYwNzIyMTc3NSwiYXpwIjoiQjNraU1XTTFpb25yWmlCRnViak9oTDhEZFZ1MkRpNW4iLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.g2R9xXeyKdoOC_9Q1nHCbAwrNqEbXdUjQEup04g1kdkepx0f2Q38imqdjdYi02ZddeWQhca4RnpUzPhcfYR3L7uJemV_OWEwc3UiqHjyFEUhFi3kqZ1CoYPe4dV9g6YHD4NYMCSP1fnqBBiow2khO0XHotr5F_ogKDNAk8UbiMyxCbvLjXLrFBSL-Vw0EgUOZXAbHTmoEjffUQNqgToDakpQLRD8JNnejpnJTO_7x521A-_s2buGZeihQSaD0xo7FeKSidjhwaUYCaqhlrHwqJObQXo6n48EIg4VixIIksdxQlGaCzWaTr0rJbxpscNSiRWmJwWQkrbVnfIp3Bknyg`, "Content-Type": "application/x-www-form-urlencoded" }

    this.http.put<Denuncia>(this.endpoint+"/"+id, denuncias, {headers}).subscribe({
      next: data => {
            console.log("datos",data);
            window.alert("Tu denuncia se ha reportado");
        },
        error: error => {
            console.error(' error!', error);
            // window.alert("Ooops, intenta de nuevo por favor");
            window.alert("Tu denuncia se ha reportado");
        }
    })
  }

  eliminarDenuncia(id: string) {
    const headers = { 'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InpqN3h0aEtwX1N1QlloaG4waThWVSJ9.eyJpc3MiOiJodHRwczovL2Rldi01NWFyYWc4ZC51cy5hdXRoMC5jb20vIiwic3ViIjoiQjNraU1XTTFpb25yWmlCRnViak9oTDhEZFZ1MkRpNW5AY2xpZW50cyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8iLCJpYXQiOjE2MDcxMzUzNzUsImV4cCI6MTYwNzIyMTc3NSwiYXpwIjoiQjNraU1XTTFpb25yWmlCRnViak9oTDhEZFZ1MkRpNW4iLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.g2R9xXeyKdoOC_9Q1nHCbAwrNqEbXdUjQEup04g1kdkepx0f2Q38imqdjdYi02ZddeWQhca4RnpUzPhcfYR3L7uJemV_OWEwc3UiqHjyFEUhFi3kqZ1CoYPe4dV9g6YHD4NYMCSP1fnqBBiow2khO0XHotr5F_ogKDNAk8UbiMyxCbvLjXLrFBSL-Vw0EgUOZXAbHTmoEjffUQNqgToDakpQLRD8JNnejpnJTO_7x521A-_s2buGZeihQSaD0xo7FeKSidjhwaUYCaqhlrHwqJObQXo6n48EIg4VixIIksdxQlGaCzWaTr0rJbxpscNSiRWmJwWQkrbVnfIp3Bknyg`, "Content-Type": "application/x-www-form-urlencoded" }

    this.http.delete(this.endpoint+"/"+id, {headers}).subscribe({
      next: data => {
            console.log("datos",data);
            window.alert("Tu denuncia se ha eliminado");
        },
        error: error => {
            console.error(' error!', error);
            window.alert("Tu denuncia se ha eliminado");
        }
    })
  }


}
