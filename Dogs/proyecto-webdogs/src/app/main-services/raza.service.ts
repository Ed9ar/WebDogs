import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
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
export class RazaService {



  //constructor() { }

  endpoint = 'https://api.thedogapi.com/v1/breeds';

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

  getRaza() {
    console.log("en el servicio")
    return this.http.get<object[]>(this.endpoint).pipe(retry(3),catchError(this.handleError));
  }

}
