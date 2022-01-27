import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  patternEmail = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$";
  showPassword:boolean=false;
  formErrorMsg = "";
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.pattern(this.patternEmail)]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)]),

  });

  constructor(private router: Router,private auth: AuthService) { }

  ngOnInit(): void {
  }

  loginDetails(){
    console.log(this.loginForm.value);
   var result = this.auth.login(this.loginForm.value);
   const userRole = this.auth.getUserRole();
   if(result.message === 'login success')
    this.router.navigateByUrl('/');

    else{
this.formErrorMsg="Username/Password is incorrect"
    }


  }
  get f(){
    return this.loginForm.controls;
  }
}
