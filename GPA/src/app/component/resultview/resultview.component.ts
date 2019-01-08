import { Component, OnInit } from '@angular/core';
import {Faculty} from '../../faculty';
import {FacultyService} from '../../shared_service/faculty.service';
import { MarkService } from '../../shared_service/mark.service';
import { Mark } from '../../marks';
@Component({
  selector: 'app-resultview',
  templateUrl: './resultview.component.html',
  styleUrls: ['./resultview.component.css']
})
export class ResultviewComponent implements OnInit {

  constructor(private markService: MarkService,
  private facultyService:FacultyService) { }

  private facultyList;
  private departmentList;
  private resultList;
  year: number;
  sem: number;
  ep_num: string;

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
   getresults() {
    this.markService.getresult(this.ep_num,this.year,this.sem).subscribe(data => {
      console.log("111111111");
      console.log(data);
      this.resultList = data
    }, err => {
      console.log(err);
    });
  }


// getDepartments(id) {
//     console.log(id);
//     if (id != null) {
//       this.facultyService.getDepartment(id).subscribe(data => {
//         this.departmentList = data;
//         console.log(data);
//       }, err => {
//          console.log(err);
//        });
//     }

//   }


// getDigreePro(id){
//   console.log(id);
//   this.facultyService.getDegreeProgrammes(id).subscribe(data =>{
//     this.digreeProList=data;
//     console.log(data);
//   },err =>{
//     console.log(err);
//   })
// }
}
