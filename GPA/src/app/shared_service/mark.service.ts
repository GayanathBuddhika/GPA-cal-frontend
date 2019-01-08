import { Injectable } from '@angular/core';
import {HttpClient} from '../../../node_modules/@angular/common/http';
import {Exam} from 'src/app/exam';
import {StudentSubject} from 'src/app/studentSubject';
import{Mark} from 'src/app/marks'

@Injectable({
  providedIn: 'root'
})
export class MarkService {

  constructor(private http : HttpClient) { }

  saveExam(exam : Exam[]){
    return this.http.post<any>("api/exam", exam);
  }
  saveStudentSubject(studentSubjects: StudentSubject[] ){
    return this.http.post<any>("api/studentSubject", studentSubjects);
  }
  getStudentSubject(stsub : number, subnum:number){
    return this.http.get<any>("api/getstsub/"+stsub+"/"+subnum);
  }
  saveMarks(marks : Mark[]){
    return this.http.post<any>("api/addMarks", marks);
  }
  getresult(epnum : string, year:number, sem: number){
    return this.http.get<any>("api/getmark/"+epnum+"/"+year+"/"+sem);
  }
}
