import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Person4 } from 'src/app/person4';

@Injectable({
  providedIn: 'root'
})
export class Common4Service {

  person4:any = new Person4();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  


  constructor(private http: HttpClient) { }

  baseURL: string = "http://localhost:8080/multum/api/users";

  getAll1(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  create1(data: any): Observable<any> {
    return this.http.post(this.baseURL, data);
  }

  update(id: number, personData:any): Observable<Person4> {
    return this.http.put<any>(this.baseURL + '/' + id, JSON.stringify(personData), this.httpOptions);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`, this.httpOptions);
  }

  handleError(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }

  findById(id: number): Observable<Person4> {
    return this.http.get<Person4>(`${this.baseURL}/` + id);
  }


}
