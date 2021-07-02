import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { person3 } from 'src/app/person3';

@Injectable({
  providedIn: 'root'
})
export class Common2Service {

  constructor(private http:HttpClient) { }

  baseURL: string = "http://localhost:8080/api/user1";

  getPeople1(): Observable<person3[]> {
    console.log('getPeople '+this.baseURL);
    return this.http.get<person3[]>(this.baseURL);
  }

  addPerson1(person:person3): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(person);
    console.log(body);
    return this.http.post(this.baseURL, body,{'headers':headers});
  }


}
