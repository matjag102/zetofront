import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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
  constructor(private _snackBar: MatSnackBar, private login: LoginService, private router:Router) { }

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
      (data: any)=>{

        //login...
        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe(
          (user: any)=>{
            this.login.setUser(user);
            console.log(user);
            //redirect... ADMIN: admin-strona
            //redirect... USER: user-strona robocze nazwy moga ulec zmianie
            if(this.login.getUserRole()=="ADMIN"){
                //strona admina
                //window.location.href='/admin';
                this.router.navigate(['admin'])
            }
            else if(this.login.getUserRole()=="USER"){
              //strona uzytkownika
              //window.location.href='/uzytkownik-dashboard';
              this.router.navigate(['uzytkownik-dashboard'])
            }
            else{
              this.login.logout();
            }
          }
        );


      },
      (error)=>{
        console.log(error);
        this._snackBar.open("Nieprawidłowe dane logowania! Spróbuj ponownie!", "Ok",{
          duration: 3000,
          verticalPosition: 'top'
        })
      }

      //
    );
  }
}
