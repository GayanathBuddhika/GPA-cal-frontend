import { Component, OnInit, OnChanges, ViewChild, OnDestroy} from '@angular/core';
import { FacultyService } from '../../shared_service/faculty.service';
import {StudentService} from '../../shared_service/student.service';
import { Subscription } from 'rxjs';
import { Faculty } from '../../faculty';
import { Student } from '../../student';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  private facultyList;
  private departmentList;
  private digreeList;
  private students= new Student();
  private studentList:Student[]=[];
  @ViewChild('myForm') formValues;
   private sub: Subscription;
   name: string;
   email: string;
   ep_num:string;
   badge:string;
   login_num: string;

  constructor(
    private facultyService: FacultyService ,
    private studentService: StudentService
    
  ) { }
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


  getDegreePro(id) {
    if (id != null) {
      this.facultyService.getDegreeProgrammes(id).subscribe(data => {
        this.digreeList = data;
        console.log(data);
      }, err => { })
    }
  }

  createNumber(){
   this.studentService.genarateNumber().subscribe((data)=>{
    console.log(data);
    this.login_num=data;
  },err=>{
    console.log(err);
  })
  }

saveStudent(){

  this.students.name = this.name;
  this.students.email = this.email;
  this.students.ep_num=this.ep_num;
  this.students.badge=this.badge;
  this.students.login_num=this.login_num;
  this.studentList.push(this.students);
  console.log(this.studentList);
  this.sub=this.studentService.enterStudent(this.studentList).subscribe((data)=>{
    console.log(data);
  },err=>{
    console.log(err);
  })

  this.studentService.getEmail("user_password" , this.login_num , this.email).subscribe((data)=>{
    console.log(data);

  },err=>{
    console.log(err);
  })
  this.studentList.splice(0,1);

  this.formValues.reset();

}
  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
