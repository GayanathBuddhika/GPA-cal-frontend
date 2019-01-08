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
  getafaculty(id){
    return this.http.get<any>("api/faculty/"+id);
  }
  getadepartment(id){
   return this.http.get<any>("api/getdepartments/"+id);
  }
  getDpro(id){
    return this.http.get<any>("api/dpro/"+id);
  }
}