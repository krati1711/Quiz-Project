import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// export class LoginComponent implements OnInit {

//   constructor(private authService: AuthService, private router: Router) { }

//   ngOnInit(): void {
//   }

//   username: String  = "krati";
//   password: String = "krati";

//   login() {
//     this.authService.login(this.username, this.password).subscribe(res => {
//       console.log(res);
//       this.router.navigate(['dashboard']);
//     }, err => {
//       console.log(err);
//     } );
//   }
// }





export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  error = {
    errorCode: '',
    errorMessage: '',
    errorPresent: false
  };
  loginError: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
    ) {}

  ngOnInit() {

    localStorage.clear();

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.authService.logout();
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit() {
    this.submitted = true;
    this.authService.login(this.username.value, this.password.value).subscribe((data) => {
       if (this.authService.isLoggedIn) {
          const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : 'http://localhost:4200/login';
          this.router.navigate(['/dashboard']);
        } else {
          this.loginError = 'Username or password is incorrect.';
        }
      },
      error => {
        this.error.errorCode = error.errorCode;
        this.error.errorMessage = error.errorMessage;
        this.error.errorPresent = true;
        alert(this.error.errorMessage);
      }
    );
  }
}
