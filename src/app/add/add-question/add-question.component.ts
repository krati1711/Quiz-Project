import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  addQuestion: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.addQuestion = new FormGroup({
      new_question: new FormControl(null),
      quiz_name: new FormControl(null)
        	})
  }

onSubmit() {
    console.log(this.addQuestion);
    console.log(this.addQuestion.get('new_question').value);
    console.log(this.addQuestion.get('quiz_name').value);
    }
}

