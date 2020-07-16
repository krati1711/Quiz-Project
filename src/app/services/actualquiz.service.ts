import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActualquizService {

  constructor(private httpClient: HttpClient) { }

  getAllQuiz(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:3000/getAllQuiz');
  }

  getQuestionPerQuiz(quizid: string): Observable<any> {
    return this.httpClient.get<any>('http://localhost:3000/getQuestionsPerQuiz/' + quizid);
  }
}
