import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { SalaService } from '../service/sala.service';

@Component({
  selector: 'app-rezerwacja',
  templateUrl: './rezerwacja.component.html',
  styleUrls: ['./rezerwacja.component.css']
})
export class RezerwacjaComponent implements OnInit {

  sale=[
    {
      "idPomieszczenie": 1,
      "nazwa": "Sala  u krzyśka",
      "typ": "Sala weselna",
      "ulica": "Żołnierska",
      "miasto": "Olsztyn",
      "kodPocztowy": "999",
      "idGalerii": null
    },
    {
      "idPomieszczenie": 1,
      "nazwa": "Test",
      "typ": "Test2137",
      "ulica": "Test",
      "miasto": "Test",
      "kodPocztowy": "999",
      "idGalerii": null
      },
    {
      "idPomieszczenie": 1,
      "nazwa": "Test",
      "typ": "Test2137",
      "ulica": "Test",
      "miasto": "Test",
      "kodPocztowy": "999",
      "idGalerii": null
    }
  ]
  constructor(private _sala:SalaService) { }

  ngOnInit(): void {
    this._sala.sale().subscribe(
      (data:any)=>{
        this.sale=data;
        console.log(this.sale);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Błąd','Błąd podczas ładowania strony','error');
      }
      )
  }

}
