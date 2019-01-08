import { Injectable } from '@angular/core';
import {HttpClient} from '../../../node_modules/@angular/common/http';
import {Student} from 'src/app/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http : HttpClient) { }
  getStudent(epnum: string){
     return this.http.get<any>("api/getStudent/"+epnum);
  }
  getStudents(faculty : string,department: string, dpro: string,badge:string){
    return this.http.get<any>("api/getStudents/"+faculty+"/"+department+"/"+dpro+"/"+badge);
  }
  genarateNumber(){
   return this.http.get<any>("api/students/password");
  }
  enterStudent(student: Student[]){
    return this.http.post<any>("api/students/",student);
  }
  
  getEmail(subject: string , message: string , email: string) {
    return this.http.get<any>("api/email/sendEmail/"+ subject + "/" + message + "/" + email );
  }
}
