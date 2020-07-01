import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  createQuiz: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.createQuiz = new FormGroup({
      quiz_name: new FormControl(null)
        	})
  }

  onSubmit() {
    console.log(this.createQuiz);
    console.log(this.createQuiz.get('quiz_name').value);
    }

}
