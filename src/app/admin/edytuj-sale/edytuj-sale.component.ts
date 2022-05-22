import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalaService } from 'src/app/service/sala.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edytuj-sale',
  templateUrl: './edytuj-sale.component.html',
  styleUrls: ['./edytuj-sale.component.css']
})
export class EdytujSaleComponent implements OnInit {

  constructor(private _route:ActivatedRoute, private _sala:SalaService) { }

  idPomieszczenie=0;
  sala;

  ngOnInit(): void {
    
    this.idPomieszczenie = this._route.snapshot.params['idPomieszczenie'];
    //alert(this.idPomieszczenie);
    this._sala.szczegoly(this.idPomieszczenie).subscribe(
      (data: any)=>{
        this.sala=data;
        console.log(this.sala);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
      public updateSala(){
        this._sala.updatePomieszczenie(this.idPomieszczenie,this.sala).subscribe(
          (data)=>{
            Swal.fire('Gotowe!','Zaktualizowano dane','success');
          },
          (error)=>{
            Swal.fire('Błąd','Wystąpił problem przy aktualizowaniu danych','error');
          }
      )
    }
  }

