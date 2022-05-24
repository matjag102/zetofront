import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class RezerwacjaService {

  constructor(private _http:HttpClient) { }

  public addRezerwacja(dane){
    return this._http.post(`${baseUrl}/rezerwacja/add?id=${dane.id}&dataStart=${dane.dataStart}&dataStop=${dane.dataStop}`, dane)
  }
  public getRezerwacjePom(id){
    return this._http.get(`${baseUrl}/rezerwacja/findidpom/${id}`)
  }
}
