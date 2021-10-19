import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person2 } from 'src/app/person2';

@Injectable({
  providedIn: 'root'
})
export class Common5Service {

  constructor(private http: HttpClient) { }

  baseURL: string = "http://localhost:8080/multum/api/jobs";

  getAll(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.baseURL, data);
  }
}
