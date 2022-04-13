import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UzytkownikService } from '../service/uzytkownik.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rejestracja',
  templateUrl: './rejestracja.component.html',
  styleUrls: ['./rejestracja.component.css']
})
export class RejestracjaComponent implements OnInit {

  rejestracja = new FormGroup({
    login: new FormControl('', Validators.required),
    imie: new FormControl('', Validators.required),
    nazwisko: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    haslo: new FormControl('', Validators.required),
    telefon: new FormControl('', Validators.required)
  });

  constructor(private uzytkownikService:UzytkownikService, private _snackBar: MatSnackBar) { }

  public uzytkownik={
    imie:'',
    nazwisko:'',
    email:'',
    haslo:'',
    telefon:''
  }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.uzytkownik);
    if(this.uzytkownik.imie=='' || this.uzytkownik.imie==null){
      this._snackBar.open("Imie jest wymagane do rejestracji!", "Ok",{
        duration: 3000,
        verticalPosition: 'top'
      })
      return;
    }
    if(this.uzytkownik.nazwisko=='' || this.uzytkownik.nazwisko==null){
      this._snackBar.open("Nazwisko jest wymagane do rejestracji!", "Ok",{
        duration: 3000,
        verticalPosition: 'top'
      })
      return;
    }
    if(this.uzytkownik.email=='' || this.uzytkownik.email==null){
      this._snackBar.open("E-mail jest wymagany do rejestracji!", "Ok",{
        duration: 3000,
        verticalPosition: 'top'
      })
      return;
    }
    if(this.uzytkownik.haslo.length<8){
      this._snackBar.open("Hasło musi zawierać conajmniej 8 znaków!", "Ok",{
        duration: 3000,
        verticalPosition: 'top'
      })
      return;
    }
    if(this.uzytkownik.telefon=='' || this.uzytkownik.telefon==null){
      this._snackBar.open("Telefon jest wymagany do rejestracji!", "Ok",{
        duration: 3000,
        verticalPosition: 'top'
      })
      return;
    }
    //dodajUzytkownik: userservice
    this.uzytkownikService.dodajUzytkownik(this.uzytkownik).subscribe(
      (data)=>{
        //wszystko git
        console.log(data);
        // this._snackBar.open("Zostałeś pomyślnie zarejestrowany!", "Ok",{
        //   duration: 3000,
        //   verticalPosition: 'top'
        // })
        Swal.fire('Sukces!','Zostałeś zarejestrowany!', 'success');
      },
      (error)=>{
        // oj coś nie git :0
        console.log(error);
        this._snackBar.open("Coś poszło nie tak! Spróbuj ponownie!", "Ok",{
          duration: 3000,
          verticalPosition: 'top'
        })
      }
    )

  }
}