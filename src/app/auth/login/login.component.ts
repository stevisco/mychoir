import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 

  constructor(private authService:AuthService,private router:Router) { }

  public message:string;

  ngOnInit() {
  }

  onSubmit(ngForm:NgForm){
    var user = ngForm.value.user;
    var password = ngForm.value.password;
    
    this.authService.login(user,password).subscribe(
      (response) => { 
          console.log("AUTH RESPONSE "+response.status);
          if (response.status==200) {
              this.authService.setLoggedIn(true);
              this.message = "Login avvenuta correttamente";
              console.log("logged as user "+user);    
              this.router.navigate(['/songs']);    
          }
          else {
              this.message = "Login non valida";
              this.authService.setMessage(this.message);
          }
       },
      (error) => { 
        this.message = "Login non valida"; 
        this.authService.setMessage(this.message);
      }
    );
     
    
  }
}
