import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person1 } from 'src/app/person1';


@Injectable({
  providedIn: 'root'
})
export class Common1Service {

  constructor(private http: HttpClient) { }

  baseURL: string = "http://localhost:8400/login/add";

  getPeople(): Observable<Person1[]> {
    console.log('getPeople '+this.baseURL);
    return this.http.get<Person1[]>(this.baseURL);
  }

  addPerson(person:Person1): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(person);
    console.log(body);
    return this.http.post(this.baseURL, body,{'headers':headers});
  }

}
