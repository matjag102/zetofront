import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.css']
})
export class LogowanieComponent implements OnInit {

  logowanie = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    haslo: new FormControl('', Validators.required)
  });

  loginData={
    email: '',
    haslo: '',
  }
  constructor(private _snackBar: MatSnackBar, private login:LoginService) { }

  ngOnInit(): void {
  }

  loginSubmit(){
    console.log("submit")
    
    if(this.loginData.email.trim()=='' || this.loginData.email.trim()==null){
        this._snackBar.open("E-mail jest wymagany!",'',{
          duration:3000,
          verticalPosition: 'top'
        });
        return;
    }
    if(this.loginData.haslo.trim()=='' || this.loginData.haslo.trim()==null){
      this._snackBar.open("Hasło jest wymagane!",'',{
        duration:3000,
        verticalPosition: 'top'
      });
      return;
  }
    //Server request
    this.login.generateToken(this.loginData).subscribe(
      //
      (data)=>{
        console.log("sukces");
        console.log(data);
        Swal.fire('Sukces!','Zostałeś zalogowany!', 'success');
      },
      (error)=>{
        console.log(error);
        this._snackBar.open("Coś poszło nie tak! Spróbuj ponownie!", "Ok",{
          duration: 3000,
          verticalPosition: 'top'
        })
      }

      //
    );
  }
}
