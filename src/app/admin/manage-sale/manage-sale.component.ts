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
}

  
