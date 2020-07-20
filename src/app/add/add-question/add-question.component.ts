import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Quiz } from '../../../models/Quiz';
import { AdminService } from '../../services/admin.service';


@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  addQuestion: FormGroup;
  quizList: Quiz[] = [];
  quizId: String = "";
  constructor(private adminService: AdminService) {
    adminService.getAllQuiz().subscribe(res => {
      console.log(res);
      this.quizList = res.quizes;
    },
    err => {
      console.log(err);
    });
  }

  ngOnInit(): void {
    this.addQuestion = new FormGroup({
      new_question: new FormControl(null),
      correct_answer: new FormControl(null),
      wrong_answer: new FormControl(null),
      quiz_name: new FormControl(null)
        	})
  }

  get quizName() {
    return this.addQuestion.get('quiz_name');
  }

  changeQuiz(e) {
    /*this.quizName.setValue(e.target.value, {
      onlySelf: true
    });*/
    this.quizId = e.target.value.split(": ")[1];
  }

onSubmit() {
    this.adminService.addQuestion(this.addQuestion.get('new_question').value, this.addQuestion.get('correct_answer').value, this.addQuestion.get('wrong_answer').value, this.quizId)
      .subscribe( res => {
        console.log(res);
        // this.addQuestion.get('new_question').setValue("");
        // this.addQuestion.get('correct_answer').setValue("");
        // this.addQuestion.get('wrong_answer').setValue("");
        // this.addQuestion.get('quiz_name').setValue("");
      },
      err => {
        console.log(err);
      });
    }
}

