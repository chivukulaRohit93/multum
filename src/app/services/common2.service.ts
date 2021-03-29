import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person2 } from 'src/app/person2';

@Injectable({
  providedIn: 'root'
})
export class Common2Service {

  constructor(private http:HttpClient) { }

  baseURL: string = "http://localhost:8400/post/add";

  getPeople(): Observable<Person2[]> {
    console.log('getPeople '+this.baseURL);
    return this.http.get<Person2[]>(this.baseURL);
  }

  addPerson(person:Person2): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(person);
    console.log(body);
    return this.http.post(this.baseURL, body,{'headers':headers});
  }


}
