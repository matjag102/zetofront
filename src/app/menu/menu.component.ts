import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public login:LoginService) { }

  ngOnInit(): void {
  }

  public wyloguj(){
      this.login.logout();
      window.location.reload();
  }

}
