import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  uzytkownik = null;

  constructor(private login:LoginService) { }

  ngOnInit(): void {
    this.uzytkownik = this.login.getUser();
    //inny sposob tez dziala, ale jak sie usunie te dwie kinijki z tsconfig.json nadal nie działa idk dlaczego
    // this.login.getCurrentUser().subscribe(
    //   (uzytkownik:any)=>{
    //     this.uzytkownik=uzytkownik;
    //   },
    //   (error)=>{
    //     alert("error");
    //   }
    //   )
  }

}
