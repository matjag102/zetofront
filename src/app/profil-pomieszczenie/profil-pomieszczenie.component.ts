import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import Swal from 'sweetalert2';
import { SalaService } from '../service/sala.service';
import { NgModule } from '@angular/core';
import { FormControl } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import { RezerwacjaComponent } from '../rezerwacja/rezerwacja.component';
import { RezerwacjaService } from '../service/rezerwacja.service';

@Component({
  selector: 'app-profil-pomieszczenie',
  templateUrl: './profil-pomieszczenie.component.html',
  styleUrls: ['./profil-pomieszczenie.component.css']
})
export class ProfilPomieszczenieComponent implements OnInit {
 
  constructor(private _route: ActivatedRoute, private _sala:SalaService, private _rezerwacja:RezerwacjaService) { }
  dane={
    id: 0,
    dataStop: new Date(),
    dataStart: new Date(),
  }
  

  idPomieszczenie=0;
  szczegoly: any;
  images =[
    {
      imageSrc:'https://www.konferencje.pl/media/cache/resolve/collage_hq/1/5/2/8/152842f7ba87e6f1c96f559b254b2f0c.jpg',
      imageAlt:'sala1'
    },
    {
      imageSrc:'http://www.confero.pl/content/img/mdc/36065.jpg',
      imageAlt:'sala2'
    },
    {
      imageSrc:'https://samequizy.pl/wp-content/uploads/2021/04/20/images_ef55a3cec90c.jpg',
      imageAlt:'sala3'
    },
    {
      imageSrc:'https://csn.naekranie.pl//wp-content/uploads/2019/04/14_wiedzmin_od_netfliksa_pierwsze_sceny_i_fotografie_kaer_morhen_0_b_5cac493ac55c6.jpeg',
      imageAlt:'sala4'
    },
    {
      imageSrc:'https://assets.reedpopcdn.com/144959154208.jpg/BROK/thumbnail/1200x900/quality/100/144959154208.jpg',
      imageAlt:'sala5'
    },
    {
      imageSrc:'http://www.confero.pl/content/img/mdc/36065.jpg',
      imageAlt:'sala6'
    },
  ]

  ngOnInit(): void {
    this.idPomieszczenie = this._route.snapshot.params['idPomieszczenie'];
    this.dane.id=this.idPomieszczenie;
    // alert(this.idPomieszczenie);
    this._sala.szczegoly(this.idPomieszczenie).subscribe(
      (data:any)=>{
        this.szczegoly=data;
        console.log(data);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Błąd','Błąd podczas ładowania strony','error');
      }
      )

  }
  dodajRezerwacje(){
    
    console.log(this.dane.dataStart);
    console.log(this.dane.dataStop);
    this._rezerwacja.addRezerwacja(this.dane).subscribe(
      (data)=>{
       Swal.fire('Gotowe', 'dodano rezerwacje','success');
        this.dane={
          id: 0,
          dataStop: new Date(),
          dataStart: new Date(),
        }
      },
     (error)=>{
       Swal.fire('Bład','Bład podczas dodawania rezerwacji','error');
      }
    )
  }

}
