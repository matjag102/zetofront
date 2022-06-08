import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import Swal from 'sweetalert2';
import { SalaService } from '../service/sala.service';
import { NgModule } from '@angular/core';
import { FormControl } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import { RezerwacjaComponent } from '../rezerwacja/rezerwacja.component';
import { RezerwacjaService } from '../service/rezerwacja.service';
import {MatCalendarCellClassFunction, MatCalendarCellCssClasses} from '@angular/material/datepicker';
import { STRING_TYPE } from '@angular/compiler'


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
  //from=new Date();
  //to=new Date();
  //j=0;
  
  rezerwacje=[]

  zarezerwowane=[]

  kolizja=0
  datesToHighlight = ["2019-01-22T18:30:00.000Z", "2019-01-22T18:30:00.000Z", "2019-01-24T18:30:00.000Z", "2019-01-28T18:30:00.000Z", "2019-01-24T18:30:00.000Z", "2019-01-23T18:30:00.000Z", "2019-01-22T18:30:00.000Z", "2019-01-25T18:30:00.000Z"];

  komunikat=""

  minD=new Date();

  minD2=new Date();


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
  myDateFilter = (d: Date): boolean => {
    const day = d.getDay();
    const month = d.getMonth();
    const year = d.getFullYear();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6 ;
  }


  ngOnInit(): void {
    this.minD=new Date();
    this.minD2=new Date();
    this.idPomieszczenie = this._route.snapshot.params['idPomieszczenie'];
    this.dane.id=this.idPomieszczenie;
    // alert(this.idPomieszczenie);
    this._sala.szczegoly(this.idPomieszczenie).subscribe(
      (data:any)=>{
        this.szczegoly=data;
        //console.log(data);
      },
      (error)=>{
        //console.log(error);
        Swal.fire('Błąd','Błąd podczas ładowania strony','error');
      }
      )
      let year: any;
      let month: any
      let day: any
      let nowadata: any
      
      this._rezerwacja.getRezerwacjePom(this.idPomieszczenie).subscribe(
        (data:any)=>{
          this.rezerwacje=data;
          //console.log(data);
          let j=0;
          for(var i=0; i<this.rezerwacje.length;i++){
            let from=new Date(this.rezerwacje[i].dataStart);
            let to=new Date(this.rezerwacje[i].dataStop);
            //console.log(from);
            //from.setDate(from.getDate()+1)
            //console.log(from);
            //console.log(this.from)
            while(from<=to){
              year=from.getFullYear();
              month=from.getMonth();
              day=from.getDate()+1;
              //nowadata=year+'-'+month+'-'+day;
              nowadata=new Date(year,month,day)
              this.zarezerwowane[j]=nowadata;
              //console.log(this.zarezerwowane[j]);
              j++;

              from.setDate(from.getDate()+1)

            }
          }
          
        },
        (error)=>{
          console.log(error);
          Swal.fire('Błąd','Błąd podczas ładowania strony','error');
        }
        );

  }
  onChangeEvent(){
    //console.log(this.zarezerwowane[0])
      this.kolizja=0;
      let from=new Date(this.dane.dataStart);
      let to=new Date(this.dane.dataStop);
      from.setDate(from.getDate()+1)
      to.setDate(to.getDate()+1)
      
      let year: any;
      let month: any
      let day: any;

      let year1: any;
      let month1: any
      let day1: any;
      

      let year2: any;
      let month2: any
      let day2: any;

      let tmp1: any;
      let tmp2: any;
      let i=0;
      //console.log(from)
      while(from<=to){
        year1=from.getFullYear()
        month1=from.getMonth()
        day1=from.getDate()
        tmp1=new Date(year1,month,day);
        //console.log("test2"+tmp1)
        for(let i=0;i<this.zarezerwowane.length;i++){
          year2=this.zarezerwowane[i].getFullYear()
          month2=this.zarezerwowane[i].getMonth()
          day2=this.zarezerwowane[i].getDate()
          tmp2=new Date(year2,month2,day2)
          //console.log("->"+tmp2)
          
          if(tmp1.getTime()==tmp2.getTime()){
            console.log(tmp1+"TESTOWANE"+tmp2)
            this.kolizja=this.kolizja+1;
          }
          
        }
        year=from.getFullYear();
        month=from.getMonth();
        day=from.getDate()+1;
        from.setDate(from.getDate()+1)
        

      }
      console.log(this.kolizja)
    }

  dodajRezerwacje(){
    if(this.kolizja!=0){
      this.komunikat="kolizja"
    }
    else{
    //console.log(this.dane.dataStart);
    //console.log(this.dane.dataStop);
    this.komunikat=""
    this._rezerwacja.addRezerwacja(this.dane).subscribe(
      (data)=>{
       Swal.fire('Gotowe', 'dodano rezerwacje','success');
        this.dane={
          id: 0,
          dataStop: new Date(),
          dataStart: new Date(),
          
        }
        window.location.reload()
      },
     (error)=>{
       Swal.fire('Bład','Bład podczas dodawania rezerwacji','error');
      }
    )
    }
    
  }

  zmianamin(){
    this.minD2=this.dane.dataStart;
    //console.log(this.zarezerwowane[0].getDate())
  }

  


}
