import { Injectable } from '@angular/core';
import {HttpClient} from '../../../node_modules/@angular/common/http';
import { Subject } from "src/app/subject";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http:HttpClient) { }

saveSubject(subject:any){
  return this.http.post<any>("/api/addSubject/", subject);

}
getSubject(digree: number, year: number, sem: number){
  return this.http.get<any>("api/digreeProgram/"+digree+"/"+year+"/"+sem);
}

}
