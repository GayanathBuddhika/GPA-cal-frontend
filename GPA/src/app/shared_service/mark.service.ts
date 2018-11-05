import { Injectable } from '@angular/core';
import {HttpClient} from '../../../node_modules/@angular/common/http';
import {Exam} from 'src/app/exam';

@Injectable({
  providedIn: 'root'
})
export class MarkService {

  constructor(private http : HttpClient) { }

  saveExam(exam : Exam[]){
    return this.http.post<any>("api/exam", exam);
  }
}
