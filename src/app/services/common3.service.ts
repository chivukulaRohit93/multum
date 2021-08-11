import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Person } from 'src/app/person';

@Injectable({
  providedIn: 'root'
})
export class Common3Service {
  user: any;

  constructor(private http: HttpClient) { }

   baseURL: string = "http://localhost:8080/api/registers";

  getAll(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.baseURL, data);
  }


  // checkIfUsernameExists(email: string): Observable<boolean> {
  //   return of(this.baseURL.includes(email)).pipe(delay(1000));
  // }

  getUserByEmail(email: string){
    return this.http.get<any[]>(`$(this.baseURL)?email=${email}`);
  }


  // getByEmail(email: string): Observable<Person | undefined> {
  //   const user = this.user.find((((user: { email: string; }) => user.email === email)));
  //   return of(user).pipe(delay(500));
  // }

}

