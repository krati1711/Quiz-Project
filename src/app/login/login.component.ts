import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
  }

  username: String  = "krati";
  password: String = "krati";

  login() {
    this.adminService.login(this.username, this.password).subscribe(res => {
      console.log(res);
      this.router.navigate(['dashboard']);
    }, err => {
      console.log(err);
    } );
  }
}
