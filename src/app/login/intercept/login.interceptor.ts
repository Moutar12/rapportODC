import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoginService} from "../login.service";

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor(private authService: LoginService) {}

  // @ts-ignore
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authService.getToken() ;
    // console.log(token) ;
    if (token){
      request = request.clone({headers: request.headers.set('Accept', 'application/json')});
      const cloneReq = request.clone(
        {
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      return next.handle(cloneReq);
    }
    return next.handle(request);
  }
}
