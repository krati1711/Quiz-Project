import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Quiz } from '../models/Quiz';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  registerForm!: FormGroup;
  loginForm!: FormGroup;
  registersubmitted = false;
  loginsubmitted = false;
  quizList: Quiz[] = [];
  quizId = '';

  constructor(private formBuilder: FormBuilder, private adminService: AdminService, private router: Router, private userService: UserService) {
    adminService.getAllQuiz().subscribe(res => {
      console.log(res);
      this.quizList = res.quizes;
    },
      err => {
        console.log(err);
      });
  }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      age: ['', [Validators.required, Validators.min(1), Validators.max(20)]],
      gender: ['', Validators.required],
      email: [''],
      quizname: ['', [Validators.required]]
    });

    this.loginForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      quizname: ['', [Validators.required]]
    });
  }

  get f() { return this.registerForm.controls; }
  get g() { return this.loginForm.controls; }

  onSubmit() {
    this.registersubmitted = true;
    let tempstatus: number;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    let tempuser: string;
    this.userService.registerUser(this.registerForm.value.email, this.registerForm.value.name, this.registerForm.value.age, this.registerForm.value.gender)
      .subscribe(res => {
        tempuser = res.name;
        tempstatus = res.mystatuscode;
        if (tempstatus === 1){
          localStorage.setItem('userdetails', JSON.stringify({username: res.username, quizid: this.registerForm.value.quizname}));
        }
      },
        err => {
          console.log('registration error-' + err);
          alert("Problem in register user");
        },
        () => {
          console.log("in complete-" + localStorage.getItem('userdetails'));
          if (tempstatus === 0){
            alert("User Already Registered");
            this.registerForm.reset();
          }
          else if (localStorage.getItem('userdetails')) {
            alert("Your username is - " + tempuser);
            this.router.navigate(['/quiz']);
          }
        });

    // display form values on success
    /* alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.startForm.value, null, 4));
    localStorage.setItem('userdetails', JSON.stringify(this.startForm.value));
    // this.userService.registerUser();
    this.router.navigate(['/quiz']); */
  }

  onLoginSubmit() {
    this.loginsubmitted = true;
    let tempstatus: number;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.userService.loginUser(this.loginForm.value.name)
      .subscribe(res => {

        tempstatus = res.mystatuscode;
        if (tempstatus === 1){
          this.userService.storeAccess(res.token);
          localStorage.setItem('userdetails', JSON.stringify({username: res.username, quizid: this.loginForm.value.quizname}));
        }

      },
        err => {
          console.log('login error-' + err);
          alert("Problem in login user");
        },
        () => {
          console.log("in complete login-" + localStorage.getItem('userdetails'));
          if (tempstatus === 0){
            alert("No such user found. Try Registering first");
            this.loginForm.reset();
          }
          else if (localStorage.getItem('userdetails')) {
            this.router.navigate(['/quiz']);
          }
        });
  }
}
