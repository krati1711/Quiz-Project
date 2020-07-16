import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuizResponse } from '../models/QuizResponse';

let httpHeaders = new HttpHeaders({
  'Content-Type' : 'application/json',
  //'Cache-Control': 'no-cache',
  'Access-Control-Allow-Origin': '*',
  //'Access-Control-Allow-Credentials': 'true',
  //'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  //'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
});

let options = {
  headers: httpHeaders
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(email:string , name:string, age:string, gender:string): Observable<any> {
    return this.http.post<any>('http://localhost:3000/registerUser',{email: email, name: name, age: age, gender: gender}, options);
  }
  
  loginUser(username:string ): Observable<any> {
    return this.http.post<any>('http://localhost:3000/loginUser',{name: username}, options);
  }

  registerResponse(response: QuizResponse): Observable<any> {
    console.log(response);
    return this.http.post<any>('http://localhost:3000/registerResponse',{EachResponses: response.EachResponses, username: response.username, quizid: response.quizid}, options);
  }
}
