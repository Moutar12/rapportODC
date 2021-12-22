import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {apiUrl} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LivreLivreService {

  constructor(private http: HttpClient) { }

  getLivres(){
    return this.http.get(`${apiUrl}livre`)
  }

  addLivre(form: any){
    return this.http.post(`${apiUrl}livre`, form)
  }

  getGenre(){
    return this.http.get(`${apiUrl}genres`)
  }
}
