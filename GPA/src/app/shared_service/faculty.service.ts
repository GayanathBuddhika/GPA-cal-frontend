import { Injectable } from '@angular/core';
import {HttpClient} from '../../../node_modules/@angular/common/http';
import { Mark } from "src/app/marks";

@Injectable({
  providedIn: 'root'
})

export class FacultyService {
  

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
  enterMark(mark: Mark[]){
    return this.http.post<any>("api/addMarks/",mark);
  }
}