import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],

})
export class StudentsComponent implements OnInit {

  p: number = 1;
  constructor() { }
  ngOnInit() {
  }
  students=[
    {
        "Id":1,
        "FirstMidName": "Carson",
        "LastName": "Alexander",
        "EnrollmentDate": "2005-09-01",
    },
    {
      "Id":2,
      "FirstMidName": "Meredith",
      "LastName": "Alonso",
      "EnrollmentDate": "2002-09-01",
    },
    {
    "Id":3,
    "FirstMidName": "Arturo",
    "LastName": "Anand",
    "EnrollmentDate": "2003-09-01",
    },
    {
      "Id":4,
      "FirstMidName": "Gytis",
      "LastName": "Barzdukas",
      "EnrollmentDate": "2002-09-01",
    
    },
    {
      "Id":5,
      "FirstMidName": "Yan",
      "LastName": "Li",
      "EnrollmentDate": "2002-09-01",
    },
    {
      "Id":6,
      "FirstMidName": "Meredith",
      "LastName": "Alonso",
      "EnrollmentDate": "2001-09-01",
    },
    {
      "Id":7,
      "FirstMidName": "Laura",
      "LastName": "Norman",
      "EnrollmentDate": "2003-09-01",
    },
    {
      "Id":8,
      "FirstMidName": "Nino",
      "LastName": "Olivetto",
      "EnrollmentDate": "2005-09-01",
    },
  ]
  delete(iddd){
    var a = confirm ('bạn đã xóa thành công');
    if ( a == true){
      const index= this.students.findIndex( word => word.Id === iddd);
      this.students.splice(index , 1);
    } else {
      return false;
    }
    
  }
}
