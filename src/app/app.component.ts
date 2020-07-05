import { Component } from '@angular/core';
import { ActualquizService } from './services/actualquiz.service'
import { Question } from './models/Question';
import { QuizResponse } from './models/QuizResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QuestionaireApp';
  questions: Question[] = [];
  ready: boolean = false;
  currentQuestion!: Question;
  response!: QuizResponse;

  // page related
  timer: any = null;
  startTime!: Date;
  endTime!: Date;
  ellapsedTime = '00:00';
  duration = '';

  pager = {
    index: 0,
    count: 1
  };

  constructor(private quizService: ActualquizService) {
    this.response = new QuizResponse('5efcc7118430663b8404f50b','krati@gmail.com');
    this.loadQuestions();
  }

  loadQuestions() {
    this.quizService.getQuestionPerQuiz().subscribe(result => {
      result.quizes.forEach((element: any) => {
        this.questions.push(new Question(element._id, element.question, element.options,element.answer));
      });
      this.currentQuestion = this.questions[0];
      this.pager.count = result.quizes.length;
    },
    err => {
      console.log(err);
    },
    () => {
      this.ready = true;
      console.log("ready " + " quiz length- " + this.pager.count);
      
      this.startTimerPerQuestion();

    });
  }

  startTimerPerQuestion() {
    this.startTime = new Date();
    this.endTime = new Date();
    this.endTime.setSeconds(this.endTime.getSeconds() + 10)
    this.ellapsedTime = '00:00';
    this.timer = setInterval(() => { this.tick(); }, 1000);
    this.duration = this.parseTime(10);
  }

  nextQuestion() {

    this.pager.index++;
    if (this.pager.index === this.pager.count){
      // this is when all questions end
      console.log("All questions done");
    }
    this.currentQuestion = this.questions[this.pager.index];
    this.startTimerPerQuestion();
  }

  parseTime(totalSeconds: number) {
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    mins = (mins < 10 ? '0' : '') + mins;
    secs = (secs < 10 ? '0' : '') + secs;
    return `${mins}:${secs}`;
  }

  getTime() {
    const timeArray = this.ellapsedTime.split(":");
    let min: number = +timeArray[0];
    let sec: number = +timeArray[1];
    let total_sec = 10 - (min * 60 + sec);
    console.log("time-" + total_sec);

  }

  tick() {
    const now = new Date();
    // const diff = (now.getTime() - this.startTime.getTime()) / 1000;
    const diff = (this.endTime.getTime() - now.getTime() ) / 1000;
    if (diff <= 0) {
      // this.onSubmit();
      console.log("QuizDone");
      //this.nextQuestion();
    }
    this.ellapsedTime = this.parseTime(diff);
  }
}
