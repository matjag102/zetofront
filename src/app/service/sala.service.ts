import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  constructor(private _http:HttpClient) { }

  public sale(){
    return this._http.get(`${baseUrl}/pomieszczenie/findall`)
  }

  public szczegoly(idPomieszczenie){
    return this._http.get(`${baseUrl}/pomieszczenie/findid/${idPomieszczenie}`)
  }
}