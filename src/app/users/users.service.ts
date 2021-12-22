import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {apiUrl} from "../../environments/environment";
import {Observable, Subject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UsersService {


  //private _refresh$ = new Subject();

  constructor(private http: HttpClient) { }

  // getRefresh(){
  //   return this._refresh$;
  // }

  allUsers(): Observable<any>{
    return this.http.get(`${apiUrl}user?status=1`)
  }
  oneUser(id: number): Observable<any>{
    return this.http.get(`${apiUrl}user/${id}`)
  }

  addUser(form: any){
  return this.http.post<any>(`${apiUrl}user`, form)
  }

  updateUser(id: number,form: any){
    return this.http.put(`${apiUrl}user/${id}`, form)
  }

  deleteUser(id: number){
    return this.http.delete(`${apiUrl}user/`+id)
  }

  allProfil(){
    return this.http.get(`${apiUrl}profil`)
  }
}
