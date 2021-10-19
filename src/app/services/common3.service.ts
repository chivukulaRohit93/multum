import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from 'src/app/person';

@Injectable({
  providedIn: 'root'
})
export class Common3Service {
  user: any;

  constructor(private http: HttpClient) { }

   baseURL: string = "http://localhost:8080/multum/api/users";

  getAll(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.baseURL, data);
  }

  update(id: number, personData:any): Observable<Person> {
    return this.http.put<any>(this.baseURL + '/' + id, JSON.stringify(personData), this.httpOptions);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`, this.httpOptions);
  }

  // checkIfUsernameExists(email: string): Observable<boolean> {
  //   return of(this.baseURL.includes(email)).pipe(delay(1000));
  // }

  getUserByEmail(email: string){
    return this.http.get<any[]>(`$(this.baseURL)?email=${email}`);
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  // getByEmail(email: string): Observable<Person | undefined> {
  //   const user = this.user.find((((user: { email: string; }) => user.email === email)));
  //   return of(user).pipe(delay(500));
  // }

}

