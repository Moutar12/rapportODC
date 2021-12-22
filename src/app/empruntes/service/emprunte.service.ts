import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {apiUrl} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmprunteService {

  constructor(private http: HttpClient) { }

  getEmprunte(){
    return this.http.get(`${apiUrl}emprunt`)
  }

  addEmprunte(form: any){
    return this.http.post(`${apiUrl}emprunt`, form)
  }

  getAdherent(){
    return this.http.get(`${apiUrl}user?profil=14`)
  }
  rendre(id: number){
    return this.http.put(`${apiUrl}emprunt/${id}`,id)
  }
}
