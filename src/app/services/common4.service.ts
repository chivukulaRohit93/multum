import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person4 } from 'src/app/person4';

@Injectable({
  providedIn: 'root'
})
export class Common4Service {

  constructor(private http: HttpClient) { }

  baseURL: string = "http://localhost:8080/api/reg1";

  getPeople(): Observable<Person4[]> {
    console.log('getPeople '+this.baseURL);
    return this.http.get<Person4[]>(this.baseURL);
  }

  addPerson(person4:Person4): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(person4);
    console.log(body);
    return this.http.post(this.baseURL, body,{'headers':headers});
  }
}
