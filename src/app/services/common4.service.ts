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

  getAll1(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  create1(data: any): Observable<any> {
    return this.http.post(this.baseURL, data);
  }
}
