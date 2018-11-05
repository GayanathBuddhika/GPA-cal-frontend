import { Component, OnInit } from '@angular/core';
import {FacultyService} from '../../shared_service/faculty.service';
import{SubjectService} from '../../shared_service/subject.service';
import{MarkService} from '../../shared_service/mark.service';
import {Faculty} from '../../faculty';
import {Subject} from '../../subject';
import{Exam} from '../../exam';

@Component({
  selector: 'app-result-enter',
  templateUrl: './result-enter.component.html',
  styleUrls: ['./result-enter.component.css']
})
export class ResultEnterComponent implements OnInit {
  private facultyList;
  private departmentList;
  private digreeProList;
  private subjectList;
  private exam=new Exam();
  private examList:Exam[]=[];
  private subject = new Subject();
  digree:number;
  year:number;
  sem:number;
  date:string;
  ep_num:string;
  grade:string;
  badge:string;



  constructor(
    private facultyService : FacultyService,
  private subjectService: SubjectService,
  private markService : MarkService) {}

  ngOnInit() {
    
    this.getFacultyList();
  }
  getSubject(){

 this.subjectService.getSubject(this.digree,this.year,this.sem).subscribe((data) =>{
   this.subjectList=data;
   console.log(data);
 },err =>{
 console.log(err);
 })
}

getFacultyList(){
  this.facultyService.getFaculty().subscribe(data =>{
    this.facultyList=data;
    console.log(data);
  },err =>{
    console.log(err);
  })
}

getDepartment(id){
  this.facultyService.getDepartment(id).subscribe(data =>{
    this.departmentList=data;
    console.log(data);
  },err=>{
    console.log(err);
  })
}
getDigreePro(id){
  this.facultyService.getDegreeProgrammes(id).subscribe(data =>{
    this.digreeProList=data;
    console.log(data);
  },err=>{
    console.log(err);
  })
}

addExam(){
this.exam.year=this.year;
this.exam.sem=this.sem;
this.exam.date=this.date;
this.exam.badge=this.badge;
this.examList.push(this.exam);
console.log(this.examList);
this.markService.saveExam(this.examList).subscribe(data =>{
  console.log(data);
},err =>{
  console.log(err);
})

}

addMarke(){}


}
