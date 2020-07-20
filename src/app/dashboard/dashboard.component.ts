import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Quiz } from '../../models/Quiz';
import { AdminService } from '../services/admin.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  addQuestion: FormGroup;
  quizList: Quiz[] = [];
  quizId: string = "";
  studentList: any[] = [];
  userDetail = null;
  responses: any[] = [];
  userScore: number;

  doWeHaveStudents = false;
  doWeHaveResponse = false;

  constructor(private adminService: AdminService) {

   }

  ngOnInit(): void {

    this.adminService.getAllQuiz().subscribe(result => {
      console.log(" are uqestions prsent -" + result);
      this.quizList = result.quizes;
    },
    err => {
      console.log(err);
    });
  }

  get quizName() {
    return this.addQuestion.get('quiz_name');
  }

  changeQuiz(e) {
    this.quizId = e.target.value.split(": ")[1];
  }

  getStudents() {
    this.doWeHaveResponse = false;
    this.adminService.getStudents(this.quizId).subscribe( res => {
      this.studentList = res.student;
    }
    ,err => {
      alert('Error getting Students from Database');
    },
    () => {
      this.doWeHaveStudents = true;
    });
  }

  getResponses(userid: string) {
    this.userScore = 0;
    this.adminService.getResponsesperQuiz(this.quizId, userid)
      .subscribe(res=> {
        this.userDetail = res.user;
        this.responses = res.responses;
        this.responses.forEach( x => {
          if (x.chosenAnswer === x.correctAnswer) {
            this.userScore++;
          }
        });
      },
       err => {
         alert('Something wrong in fetching response of a particular student.');
       },
       () => {
         this.doWeHaveResponse = true;
       });
  }
}
