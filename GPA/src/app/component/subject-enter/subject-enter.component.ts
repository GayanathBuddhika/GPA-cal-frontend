import { Component, OnInit } from '@angular/core';
import {FacultyService} from '../../shared_service/faculty.service';
import{SubjectService} from '../../shared_service/subject.service';
import {Faculty} from '../../faculty';
import{Subject} from '../../subject';
import {Digree} from '../../digree';

@Component({
  selector: 'app-subject-enter',
  templateUrl: './subject-enter.component.html',
  styleUrls: ['./subject-enter.component.css']
})
export class SubjectEnterComponent implements OnInit {

  private facultyList;
  private departmentList;
  private digreeList;
  private digree=new Digree;
  private subject=new Subject();
  subjectList:Subject[]=[];
  subject_code:string;
  subject_name:string;
  
  credit:number;
  sem:number;
  year:number;

  id:number;
  name:String;


  constructor(
    private facultyService: FacultyService,
    private subjectService: SubjectService
    
  ) { }

  ngOnInit() {
    this.getfacultyList();
  }

getfacultyList(){
  this.facultyService.getFaculty().subscribe(data =>{
    console.log(data);
    this.facultyList=data;
   

  },err =>{
    console.log(err);
  })
}

getDepartmentList(id){
  
  if(id !=null){
    this.facultyService.getDepartment(id).subscribe(data =>{
    console.log(data);
    this.departmentList=data;
  },err =>{
    console.log(err);
  })
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

  
  
  addSubject(){
   this.subject.subject_code=this.subject_code;
   this.subject.subject_name=this.subject_name;
   this.subject.credit=this.credit;
   this.subject.year=this.year;
   this.subject.sem=this.sem;
   this.subject.digreeProgram=this.digree;
   console.log(Digree);

  

   this.subjectList.push(this.subject);

   console.log(this.subjectList);
   console.log("sathira");
   this.subjectService.saveSubject(this.subjectList).subscribe((data)=>{
     console.log(data);
   },err =>{
     console.log(err);
   })
  }
}