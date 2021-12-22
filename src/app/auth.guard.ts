import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from "./login/login.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private login: LoginService, private route: Router) {
  }
  canActivate():boolean{
    // @ts-ignore
    if(this.login.getToken()){
      return true;
    }else{
      this.route.navigate(['/login']);
      return false;
    }
  }
}
