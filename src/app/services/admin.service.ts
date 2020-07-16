import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

let httpHeaders = new HttpHeaders({
  'Content-Type' : 'application/json',
  // 'Cache-Control': 'no-cache',
  // 'Access-Control-Allow-Origin': '*',
  // 'Access-Control-Allow-Credentials': 'true',
  // 'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
});

let httpHeaderss = new HttpHeaders({
  'Content-Type' : 'application/json',
  // 'Cache-Control': 'no-cache',
  'Access-Control-Allow-Origin': '*',
  // 'Access-Control-Allow-Credentials': 'true',
  // 'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
});

let options = {
  headers: httpHeaders
};

let optionss = {
  headers: httpHeaderss
};

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  getAllQuiz(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:3000/getAllQuiz');
  }
}
