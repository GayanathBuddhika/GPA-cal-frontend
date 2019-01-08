import { Component, OnInit, OnChanges, ViewChild, OnDestroy} from '@angular/core';
import { FacultyService } from '../../shared_service/faculty.service';
import {StudentService} from '../../shared_service/student.service';
// import { Subscription } from 'rxjs';
import { Faculty } from '../../faculty';
import {Department} from '../../department';
import {Digree } from '../../digree';
import { Student } from '../../student';
@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
 private facultyList;
  private departmentList;
  private digreeList;
  private facultys = new Faculty ;
  private departments = new Department;
  private dpros = new Digree;
  private students= new Student();
  private studentList;
  @ViewChild('myForm') formValues;
  //  private sub: Subscription;
   name: string;
   email: string;
   epnum:string;
   badge:string;
   login_num: string;
   faculty:string;
   department:string;
   dpro:string;

   

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

       this.facultyService.getafaculty(id).subscribe(data => {
        this.facultys = data;
        console.log("aaaaaaaaaaaaaa");
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

       this.facultyService.getadepartment(id).subscribe(data => {
        this.departments = data;
        console.log("bbbbbbbbbbbbb");
        console.log(data);
      }, err => {
         console.log(err);
       });
    }
  }
  gaya(id){
    console.log(id);
    if(id != null){
      this.facultyService.getDpro(id).subscribe(data =>{
        this.dpros=data;
         console.log("ccccccccccc");
        console.log(data);
      },err =>{
        console.log(err);
      })
    }
  }
  getStudent(){
    this.faculty=this.facultys.faculty_name;
    this.department=this.departments.dep_name;
    this.dpro=this.dpros.digpro_name;

    this.studentService.getStudents(this.faculty,this.department,this.dpro,this.badge).subscribe(data =>{
     this.studentList=data;
     console.log(data);
    },err =>{
      console.log(err);
    })
  }
 
// saveStudent(){

//   this.students.name = this.name;
//   this.students.email = this.email;
//   this.students.epnum=this.epnum;
//   this.students.badge=this.badge;
//   this.students.login_num=this.login_num;
//   this.studentList.push(this.students);
//   console.log(this.studentList);
//   this.studentService.enterStudent(this.studentList).subscribe((data)=>{
//     console.log(data);
//   },err=>{
//     console.log(err);
//   })

//   this.studentService.getEmail("user_password",this.login_num ,this.email).subscribe((data)=>{
//     console.log(data);

//   },err=>{
//     console.log(err);
//   })
//   this.studentList.splice(0,1);

//   this.formValues.reset();

// }

}
