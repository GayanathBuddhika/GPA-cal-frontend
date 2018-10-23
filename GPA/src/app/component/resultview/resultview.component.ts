import { Component, OnInit } from '@angular/core';
import {Faculty} from '../../faculty';
import {FacultyService} from '../../shared_service/faculty.service';

@Component({
  selector: 'app-resultview',
  templateUrl: './resultview.component.html',
  styleUrls: ['./resultview.component.css']
})
export class ResultviewComponent implements OnInit {

  constructor(private facultyService:FacultyService) { }
  private facultyList;
  private departmentList;
  private digreeProList;

  ngOnInit() {
     this.getFacultyList();
  }
  
  ngOnChange() {

  }

  getFacultyList() {
    this.facultyService.getFaculty().subscribe(data => {
      console.log(data);
      this.facultyList = data
    }, err => {
      console.log(err);
    });
  }


getDepartments(id) {
    console.log(id);
    if (id != null) {
      this.facultyService.getDepartment(id).subscribe(data => {
        this.departmentList = data;
        console.log(data);
      }, err => {
         console.log(err);
       });
    }

  }


getDigreePro(id){
  console.log(id);
  this.facultyService.getDegreeProgrammes(id).subscribe(data =>{
    this.digreeProList=data;
    console.log(data);
  },err =>{
    console.log(err);
  })
}
}
