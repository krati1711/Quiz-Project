import { Component } from '@angular/core';
import { ActualquizService } from './services/actualquiz.service'
import { Question } from './models/Question';
import { QuizResponse } from './models/QuizResponse';
import { EachResponse } from './models/EachResponse';
import { FinishComponent } from './finish/finish.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor() {
  }
  
}
