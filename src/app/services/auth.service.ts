import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpClientJsonpModule } from '@angular/common/http';
import { throwError, pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';
import * as crypto from 'crypto-js';


let httpHeaders = new HttpHeaders({
  'Content-Type' : 'application/json'
});


let options = {
  headers: httpHeaders
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  serverUrl = 'http://localhost:3000/login';
  errorData: {};


  constructor(private httpClient : HttpClient) { }

  redirectUrl: string;

  // login(username: String, password: String): Observable<any> {
  //   //return this.httpClient.post<any>('http://localhost:3000/login', { email: username, password: password }, options);
  //   return this.httpClient.post<any>('http://localhost:3000/login', JSON.stringify({email: username, password: password}), options);
  // }

  login(username: string, password: string) {
    return this.httpClient.post<any>('http://localhost:3000/login', JSON.stringify({email: username, password: password}), options)
    .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user.userId));
          localStorage.setItem('currentToken', JSON.stringify(user.token));
        }
      }),
      catchError(this.handleError)
    );
  }

  isLoggedIn() {
    if (localStorage.getItem('currentUser') && localStorage.getItem('currentUser')) {
      const decoded = jwt_decode(JSON.parse(localStorage.getItem('currentToken')));
      const username = JSON.parse(localStorage.getItem('currentUser'));
      // console.log(decoded ,' ', username);
      if (decoded.email === username) {
        return true;
      }
      return false;
    }
    return false;
  }

  getAuthorizationToken() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser.token;
  }

  logout() {
    localStorage.clear();
  }

  private handleError(error: HttpErrorResponse) {
    console.log("yaha se aayya");
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}
