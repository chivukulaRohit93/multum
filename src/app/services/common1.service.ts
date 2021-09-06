import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person1 } from 'src/app/person1';


@Injectable({
  providedIn: 'root'
})
export class Common1Service {

  constructor(private http: HttpClient) { }

  baseURL: string = "http://localhost:8080/multum/api/users";

  getAll(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.baseURL, data);
  }

}
