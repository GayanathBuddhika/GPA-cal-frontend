import { Injectable } from '@angular/core';
import {HttpClient} from '../../../node_modules/@angular/common/http';
import {Student} from 'src/app/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http : HttpClient) { }
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
