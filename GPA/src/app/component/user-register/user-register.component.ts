import { Component, OnInit, OnChanges } from '@angular/core';
import { FacultyService } from '../../shared_service/faculty.service';
import { Faculty } from '../../faculty';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  faculty: Faculty = {
    id: null,
    name: null
  };


  private facultys: Faculty;
  constructor(private facultyService: FacultyService) { }
  private facultyList;
  private departmentList;

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
      }, err => { });
    }

  }


  getDegreePro(id) {
    if (id != null) {
      this.facultyService.getDegreeProgrammes(id).subscribe(data => {
        this.departmentList = data;
        console.log(data);
      }, err => { })
    }
  }
}
