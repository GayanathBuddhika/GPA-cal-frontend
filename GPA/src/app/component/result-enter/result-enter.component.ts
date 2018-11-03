import { Component, OnInit } from '@angular/core';
import {FacultyService} from '../../shared_service/faculty.service';
import{SubjectService} from '../../shared_service/subject.service';
import {Faculty} from '../../faculty';
import {Subject} from '../../subject';

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
  private subject = new Subject();
  digree:number;
  year:number;
  sem:number;



  constructor(private facultyService : FacultyService,
  private subjectService: SubjectService) {}

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


}
