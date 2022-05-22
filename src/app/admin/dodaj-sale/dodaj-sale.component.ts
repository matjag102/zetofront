import { Component, OnInit } from '@angular/core';
import { SalaService } from 'src/app/service/sala.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dodaj-sale',
  templateUrl: './dodaj-sale.component.html',
  styleUrls: ['./dodaj-sale.component.css']
})
export class DodajSaleComponent implements OnInit {

  constructor(private _sala:SalaService) { }

  pomieszczenieData={
    kodPocztowy: "",
    miasto: "",
    nazwa: "",
    typ:"",
    ulica:"",
    wojewodztwo:"",
    numer:"",
    opis:"",
    id_galerii:null
  }

  ngOnInit(): void {
  }

  addPomieszczenie(){
    console.log(this.pomieszczenieData);

    this._sala.addPomieszczenie(this.pomieszczenieData).subscribe(
      (data)=>{
        Swal.fire('Gotowe', 'dodano pomieszczenie','success');
        this.pomieszczenieData={
          kodPocztowy: "",
          miasto: "",
          nazwa: "",
          typ:"",
          ulica:"",
          wojewodztwo:"",
          numer:"",
          opis:"",
          id_galerii:"",
        }
      },
      (error)=>{
        Swal.fire('Bład','Bład podczas dodawania sali','error');
      }
    )
    
  }
}
