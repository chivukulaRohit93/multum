import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from 'src/app/person';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  baseURL: string = "http://localhost:3000/users";

  constructor(private http:HttpClient) { }

  getPeople(): Observable<Person[]> {
    console.log('getPeople '+this.baseURL)
    return this.http.get<Person[]>(this.baseURL)
  }

  addPerson(person:Person): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(person);
    console.log(body)
    return this.http.post(this.baseURL, body,{'headers':headers})
  }
 


}
