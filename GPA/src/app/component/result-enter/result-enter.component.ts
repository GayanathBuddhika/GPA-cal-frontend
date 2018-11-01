import { Component, OnInit } from '@angular/core';
import {FacultyService} from '../../shared_service/faculty.service';
import{SubjectService} from '../../shared_service/subject.service';
import {Faculty} from '../../faculty';

@Component({
  selector: 'app-result-enter',
  templateUrl: './result-enter.component.html',
  styleUrls: ['./result-enter.component.css']
})
export class ResultEnterComponent implements OnInit {
  private facultyList;
  private departmentList;
  private digreeProList;


  constructor(private facultyService : FacultyService) {}

  ngOnInit() {
    this.getFacultyList();
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
