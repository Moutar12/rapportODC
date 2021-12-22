import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {apiUrl} from "../../environments/environment";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  helper = new JwtHelperService()
  // @ts-ignore
  decoded: string;
  logginIn: boolean = false;



  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password:string)
  {
    console.log('bonjour')
    return this.http.post(`${apiUrl}login`,
      {password, email}).pipe(
      map((response:any)=>{
        const decode = this.helper.decodeToken(response.token);
        localStorage.setItem('token', response.token);
        localStorage.setItem('id', decode.id);
        if (decode.roles[0] == "ROLE_ADMIN"){
          this.router.navigate(['/menu'])
        }
      }))
  }

  getToken() {
    const token = localStorage.getItem('token') ;
    if (token !== 'undefined') {
      return token ;
    }
    return null ;
  }

  logout() {
    const token = localStorage.getItem('token') ;
    this.logginIn = false;
    return  localStorage.clear();
  }
}
