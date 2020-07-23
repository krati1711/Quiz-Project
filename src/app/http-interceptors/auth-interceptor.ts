// export class AuthInterceptor {
// }
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const isLoggedIn = this.authService.isLoggedIn();
        const token = this.authService.getAuthorizationToken();
        if (isLoggedIn) {

            req = req.clone({
                setHeaders:
                    { Authorization: `Bearer ${token}` }
                }
            );
        }
        else {
          this.authService.logout();
        }

        return next.handle(req);
    }
}
