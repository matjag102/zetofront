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

  public addPomieszczenie(pomieszczenie){
    return this._http.post(`${baseUrl}/pomieszczenie/add`,pomieszczenie)
  }

  public deletePomieszczenie(idPomieszczenie){
    return this._http.delete(`${baseUrl}/pomieszczenie/delete/${idPomieszczenie}`);
  }

  public updatePomieszczenie(idPomieszczenie,pomieszczenie){
    return this._http.post(`${baseUrl}/pomieszczenie/edit/${idPomieszczenie}`,pomieszczenie);
  }
}