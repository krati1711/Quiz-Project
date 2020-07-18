import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Injectable()
export class MyInterceptor implements HttpInterceptor{

    constructor(private userService: UserService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError( err => {
            if ([401, 403].indexOf(err.status) !== -1) {
                this.userService.removeAccess();
            }

            const error = err.error.message || err.statusText;

            return throwError(error);
        }));
    }
    
}