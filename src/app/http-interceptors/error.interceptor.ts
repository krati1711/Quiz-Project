import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    /* return next.handle(request).pipe(catchError(err => {
      if ([401, 403, 500].includes(err.status) && this.authService.isLoggedIn()) {
        // auto logout if 401 or 403 response returned from api
        this.authService.logout();
      }

      const error = (err && err.error && err.error.message) || err.statusText;
      console.error(err);
      return throwError(error);
    }))
  } */

  return next.handle(request).pipe(
    retry(1),
    catchError((error: HttpErrorResponse) => {
      let errorMessage = '';
      let errorObj = null;
      if (error.error instanceof ErrorEvent) {
        // client error
        errorMessage = `Error: ${error.error.message}`;
        errorObj = {errorCode: error.status, errorMessage: error.error.message};
      }
      else{
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        errorObj = {errorCode: error.status, errorMessage: error.error.message};
      }
      // window.alert(errorMessage);
      return throwError(errorObj);
    }));
  }
}
