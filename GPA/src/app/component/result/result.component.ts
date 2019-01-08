import { Component, OnInit, OnChanges, ViewChild, OnDestroy} from '@angular/core';
import { FacultyService } from '../../shared_service/faculty.service';
import { SubjectService } from '../../shared_service/subject.service';
import { StudentService } from '../../shared_service/student.service';
import { MarkService } from '../../shared_service/mark.service';
import { Faculty } from '../../faculty';
import { Subject } from '../../subject';
import { Exam } from '../../exam';
import { Student } from '../../student';
import { StudentSubject } from '../../studentSubject';
import { Mark } from '../../marks';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
   private facultyList;
  private departmentList;
  private digreeProList;
  private subjectList;
  private studentSubject = new StudentSubject();
  private stsbList: StudentSubject[] = [];
  private subject = new Subject;
  private student = new Student;
  private stsub = new StudentSubject;
  private mark = new Mark();
  private marklist: Mark[] = [];
  digree: number;
  year: number;
  sem: number;
  ep_num: string;
  grade: string;
  credit: number;
  @ViewChild('myForm3') formValues;

  constructor(
     private facultyService: FacultyService,
    private subjectService: SubjectService,
    private markService: MarkService,
    private studentService: StudentService
  ) { }

  ngOnInit() {

    this.getFacultyList();
  }
   getSubject() {

    this.subjectService.getSubject(this.digree, this.year, this.sem).subscribe((data) => {
      this.subjectList = data;
      console.log(data);
    }, err => {
      console.log(err);
    })
  }

  getFacultyList() {
    this.facultyService.getFaculty().subscribe(data => {
      this.facultyList = data;
      console.log(data);
    }, err => {
      console.log(err);
    })
  }

  getDepartment(id) {
    this.facultyService.getDepartment(id).subscribe(data => {
      this.departmentList = data;
      console.log(data);
    }, err => {
      console.log(err);
    })
  }
  getDigreePro(id) {
    this.facultyService.getDegreeProgrammes(id).subscribe(data => {
      this.digreeProList = data;
      console.log(data);
    }, err => {
      console.log(err);
    })
  }

  
  addSubjectStudent() {
       console.log("1111111111111111");
       this.mark.grade = this.grade;
       this.mark.epnum =this.ep_num;
       this.mark.year= this.year;
       this.mark.sem=this.sem;
       this.mark.credit=this.subject.credit;
      console.log(this.subject);
      this.studentService.getStudent(this.ep_num).subscribe(data => {
      this.student = data;
      
      console.log("2222222222222222");
      console.log(data);
      this.studentSubject.student = this.student;
      console.log("3333333333333333");
      console.log(this.student);
      this.studentSubject.subject = this.subject;
      this.stsbList.push(this.studentSubject);
      console.log("444444444444444");
      console.log(this.stsbList);

      this.markService.saveStudentSubject(this.stsbList).subscribe(data => {
      console.log("555555555555555");
      console.log(data);
      }, err => {
      console.log(err);
      })

     this.markService.getStudentSubject(this.student.id,this.subject.id).subscribe(data =>{
      this.stsub=data;
      console.log("66666666666666");
      console.log(data);
       
    
      this.mark.studentSubject = this.stsub;
      this.marklist.push(this.mark);
      console.log("77777777777777");
      console.log(this.marklist);

      this.markService.saveMarks(this.marklist).subscribe(data => {
        console.log("88888888888888");
      console.log(data);
    }, err => {
      console.log(err);
    })
     

    },err =>{
      console.log(err);
    })
     
     

    }, err => {
      console.log(err);
    })

  this.stsbList.splice(0,1); 
  this.marklist.splice(0,1); 

   this.formValues.reset();
    
  



}


}
