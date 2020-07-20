import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Quiz } from 'src/models/Quiz';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  addQuestion: FormGroup;
  quizList: Quiz[] = [];
  quizId: string = "";
  constructor(private adminService: AdminService, private router: Router) {
    adminService.getAllQuiz().subscribe(res => {
      console.log(res);
      this.quizList = res.quizes;
    },
    err => {
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

  get quizName() {
    return this.addQuestion.get('quiz_name');
  }

  changeQuiz(e) {
    this.quizId = e.target.value.split(": ")[1];
  }

  deleteQuiz(){
    this.adminService.deleteQuiz(this.quizId).subscribe(
      res => {
        if (res.status == 'success'){
          alert('Quiz deleted');
          this.router.navigate(['/dashboard']);
        }
        else {
          alert('Problem in deleting Quiz, Contact Administrator');
        }
      },
      err => {
        console.log(err);
      }
    )
  }
}
