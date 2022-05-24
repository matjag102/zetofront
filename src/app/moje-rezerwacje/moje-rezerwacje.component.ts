import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../service/login.service';
import { RezerwacjaService } from '../service/rezerwacja.service';

@Component({
  selector: 'app-moje-rezerwacje',
  templateUrl: './moje-rezerwacje.component.html',
  styleUrls: ['./moje-rezerwacje.component.css']
})
export class MojeRezerwacjeComponent implements OnInit {

  constructor(private _rezerwacja:RezerwacjaService, private login:LoginService) { }

  rezerwacje=[]
  uzytkownik=null;
  idUzytkownik=0;


  ngOnInit(): void {
    this.uzytkownik = this.login.getUser();
    // console.log(this.uzytkownik)
    this.idUzytkownik = this.uzytkownik.idUzytkownik;
    this._rezerwacja.getRezerwacjeUzytkownik(this.idUzytkownik).subscribe(
      (data:any)=>{
        this.rezerwacje=data;
        console.log(this.rezerwacje);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Błąd','Błąd podczas ładowania strony','error');
      }
    )
  }

}
