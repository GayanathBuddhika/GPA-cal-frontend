import { Component, OnInit, OnChanges } from '@angular/core';
import { FacultyService } from '../../shared_service/faculty.service';
import { Faculty } from '../../faculty';
import { Mark } from '../../marks';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  private facultyList;
  private departmentList;
  private digreeList;
  private marks = new Mark();
  markList: Mark[] = [];
   grade: String;
   mark: Number;
   stsj:number;
   exam:number;
  constructor(private facultyService: FacultyService) { }
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

saveMarks(){
  console.log("fuuuuuuuuuuuuuuuuuuuuuuuu");
  console.log(this.grade);
  console.log(this.mark);
  this.marks.grade = this.grade;
  this.marks.mark = this.mark;
  this.marks.stsj=this.stsj;
  this.marks.exam=this.exam;
  this.markList.push(this.marks);
  console.log(this.marks);
  console.log("fuuuuuuuuuuuuuuuuuuuuuuuu");
  this.facultyService.enterMark(this.markList).subscribe((markList)=>{
    console.log(markList);
  },err=>{
    console.log(err);
  })

}


}
