import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  //generowanie tokenu

  public generateToken(loginData: any){
    return this.http.post(`${baseUrl}/generate-token`, loginData);
  }
  //LOGIN USER local storage
  public loginUser(token:any){
    localStorage.setItem("token", token);
    return true
  }

  //czy zalogowany
  public isLoggedIn(){
    let tokenStr=localStorage.getItem("token");
    if(tokenStr==undefined || tokenStr=='' || tokenStr==null)
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  // wylogowanie
  public logout()
  {
    localStorage.removeItem("token");
    localStorage.removeItem("uzytkownik");
    return true;
  }

  // get token
  public getToken(){
    return localStorage.getItem("token");
  }

  // szczegoly usera
  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  // get user
  public getUser(){
    let userStr=localStorage.getItem("user");
    if(userStr!=null){
      return JSON.parse(userStr);
    }
    else{
      this.logout();
      return null;
    }
  }
  // pobieranie roli
   public getUserRole(){
    let user=this.getUser()
    return user.authorities[0].authority;
  }
}
