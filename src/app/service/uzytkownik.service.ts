import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UzytkownikService {

  constructor(public http:HttpClient) { 
    
  }

  // rejestracja
  public dodajUzytkownik(uzytkownik:any){
    return this.http.post(`${baseUrl}/uzytkownik/add`, uzytkownik);
  }
}
