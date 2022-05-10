import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLoggedIn=false;
  user=null;


  constructor(public login:LoginService) { }

  ngOnInit(): void {
    this.isLoggedIn=this.login.isLoggedIn();
    this.user=this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe(data=>{
      this.isLoggedIn=this.login.isLoggedIn();
      this.user=this.login.getUser();
    });

    
  }

  public wyloguj(){
      this.login.logout();
      window.location.reload();
      //this.login.loginStatusSubject.next(false);

  }
  

}
