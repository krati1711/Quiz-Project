import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

let httpHeaders = new HttpHeaders({
  'Content-Type' : 'application/json',
  //'Cache-Control': 'no-cache',
  //'Access-Control-Allow-Origin': '*',
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

export class AdminService {

  constructor(private httpClient: HttpClient) { }

  login(username: String, password: String): Observable<any> {
    //return this.httpClient.post<any>('http://localhost:3000/login', { email: username, password: password }, options);
    return this.httpClient.post<any>('http://localhost:3000/login', JSON.stringify({email: username, password: password}), options);
  }
}
