import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})

export class UserSidebarComponent implements OnInit {

  isLoggedIn=false;
  user=null;

  constructor(public login:LoginService) { }

  ngOnInit(): void {
    
    
  }

}
