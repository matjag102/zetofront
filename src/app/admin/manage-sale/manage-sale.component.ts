import { Component, OnInit } from '@angular/core';
import { SalaService } from 'src/app/service/sala.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-sale',
  templateUrl: './manage-sale.component.html',
  styleUrls: ['./manage-sale.component.css']
})
export class ManageSaleComponent implements OnInit {

  sale=[
  ]
  constructor(private _sala:SalaService) { }

  totalLenght:any;
  page:number=1;

  ngOnInit(): void {
    this._sala.sale().subscribe(
      (data:any)=>{
        this.sale=data;
        this.totalLenght=data.length;
        console.log(this.sale);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Błąd','Błąd podczas ładowania strony','error');
      }
      )
  }
  //delete
  deletePomieszczenie(idPomieszczenie){
    Swal.fire({
      icon: 'info',
      title: 'Czy na pewno chcesz usunąć?',
      confirmButtonText: 'Usuń',
      showCancelButton: true,
    }).then((result)=>{
      if(result.isConfirmed){

        this._sala.deletePomieszczenie(idPomieszczenie).subscribe(
          (data:any)=>{
            Swal.fire('Gotowe','Sala została usunięta','success');
            window.location.reload();
          },
          (error)=>{
            Swal.fire('Błąd','Sala nie została usunieta','error');
          }
          )
      }
    })

    
  }
}

  
