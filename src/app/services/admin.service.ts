import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

/*let httpHeaders = new HttpHeaders({
  'Content-Type' : 'application/json',
  //'Cache-Control': 'no-cache',
  //'Access-Control-Allow-Origin': '*',
  //'Access-Control-Allow-Credentials': 'true',
  //'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  //'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
});*/

let httpHeaderss = new HttpHeaders({
  'Content-Type' : 'application/json',
  //'Cache-Control': 'no-cache',
  'Access-Control-Allow-Origin': '*',
  //'Access-Control-Allow-Credentials': 'true',
  //'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  //'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
});

// let options = {
//   headers: httpHeaders
// };

let optionss = {
  headers: httpHeaderss
};

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  constructor(private httpClient: HttpClient) { }

  // login(username: String, password: String): Observable<any> {
  //   //return this.httpClient.post<any>('http://localhost:3000/login', { email: username, password: password }, options);
  //   return this.httpClient.post<any>('http://localhost:3000/login', JSON.stringify({email: username, password: password}), options);
  // }

  addQuiz(quizName: String): Observable<any> {
    return this.httpClient.post<any>('http://localhost:3000/addQuiz', {quizName: quizName}, optionss);
  }

  addQuestion(question: String, correct: String, incorrect: String, quizId: string): Observable<any> {
    return this.httpClient.post<any>('http://localhost:3000/addQuestion', {question: question, correct_answer: correct, wrong_answer: incorrect, quizId: quizId}, optionss);
  }

  deleteQuiz(quizid: string) {
    return this.httpClient.delete<any>('http://localhost:3000/deleteQuiz/' + quizid);
  }

  getStudents(quizid: string) {
    return this.httpClient.get<any>('http://localhost:3000/getResponseperQuiz/' + quizid);
  }

  getResponsesperQuiz(quizid: string, userid: string) {
    return this.httpClient.get<any>('http://localhost:3000/userResponse/' + userid + '&' + quizid);
  }

  getAllQuiz(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:3000/getAllQuiz', optionss);
  }
}
