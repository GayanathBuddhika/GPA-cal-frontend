import { Injectable } from '@angular/core';
import {HttpClient} from '../../../node_modules/@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class FacultyService {
  // private baseUrl: String = 'http://localhost:8080/faculty';
  // private headers = new Headers({ 'Content-type': 'application/json' });
  // private options = new RequestOptions({ headers: this.headers });

  constructor(private http:HttpClient) { }

  getFaculty() {
     return this.http.get<any>("api/faculties");
  }
  getDepartment(depId){
    return this.http.get<any>("api/departments/"+depId);
  }
  getDegreeProgrammes(degId){
    return this.http.get<any>("api/degreeprograms/"+degId);
  }
}