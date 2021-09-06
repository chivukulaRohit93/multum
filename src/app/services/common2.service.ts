import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { person3 } from 'src/app/person3';

@Injectable({
  providedIn: 'root'
})
export class Common2Service {

  constructor(private http:HttpClient) { }

  baseURL: string = "http://localhost:8080/multum/api/users";

  getAll1(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  create1(data: any): Observable<any> {
    return this.http.post(this.baseURL, data);
  }


}
