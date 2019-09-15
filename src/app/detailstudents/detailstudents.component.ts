import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Identifiers } from '@angular/compiler';
@Component({
  selector: 'app-detailstudents',
  templateUrl: './detailstudents.component.html',
  styleUrls: ['./detailstudents.component.css']
})
export class DetailstudentsComponent implements OnInit {
  pageTitle = '';
  sinhvien: any;
  pid;

  students = [
    {
      "Id": 1,
      "FirstMidName": "Carson",
      "LastName": "Alexander",
      "EnrollmentDate": "2005-09-01",
      "enrollments":
        { "StudentID": "1", "CourseID": "1050", "Grade": "A" },
      // { "StudentID": "1", "CourseID": "1050", "Grade": "A" },
      // { "StudentID": "1", "CourseID": "4022", "Grade": "C" },
      // { "StudentID": "1", "CourseID": "4041", "Grade": "B" }, 
      "courses":
        { "CourseID": "1050", "Title": "Chemistry", "Credits": "3" },
      //  { "CourseID": "4022", "Title": "Python", "Credits": "3", },
      //  { "CourseID": "4041", "Title": "Macroeconomics", "Credits": "3", },

    },
    {
      "Id": 2,
      "FirstMidName": "Meredith",
      "LastName": "Alonso",
      "EnrollmentDate": "2002-09-01",
      "enrollments": 
        { "StudentID": "2", "CourseID": "1045", "Grade": "B" },
      "courses":
        { "CourseID": "2021", "Title": "Composition", "Credits": "3", },
    },
    {
      "Id": 3,
      "FirstMidName": "Arturo",
      "LastName": "Anand",
      "EnrollmentDate": "2003-09-01",
      "enrollments":
        { "StudentID": "3", "CourseID": "1050", "Grade": "B" },
        "courses":
        { "CourseID": "2021", "Title": "Composition", "Credits": "3,5", },
    },
    {
      "Id": 4,
      "FirstMidName": "Gytis",
      "LastName": "Barzdukas",
      "EnrollmentDate": "2002-09-01",
      "enrollments":
        { "StudentID": "4", "CourseID": "4022", "Grade": "F" },
        "courses":
        { "CourseID": "2021", "Title": "Composition", "Credits": "2", },
    },
    {
      "Id": 5,
      "FirstMidName": "Yan",
      "LastName": "Li",
      "EnrollmentDate": "2002-09-01",
      "enrollments": 
        { "StudentID": "5", "CourseID": "4041", "Grade": "C" },
     
      "courses":
      { "CourseID": "2021", "Title": "Composition", "Credits": "1", },
    },
    {
      "Id": 6,
      "FirstMidName": "Meredith",
      "LastName": "Alonso",
      "EnrollmentDate": "2001-09-01",
      "enrollments":
        { "StudentID": "6", "CourseID": "1045", "Grade": "B" },
      "courses":
        { "CourseID": "3141", "Title": "DjAngo", "Credits": "4", },
    },
    {
      "Id": 7,
      "FirstMidName": "Laura",
      "LastName": "Norman",
      "EnrollmentDate": "2003-09-01",
      "enrollments":
        { "StudentID": "6", "CourseID": "1045", "Grade": "A" },
      "courses":
        { "CourseID": "3141", "Title": "DjAngo", "Credits": "4", },
    },
    {
      "Id": 8,
      "FirstMidName": "Nino",
      "LastName": "Olivetto",
      "EnrollmentDate": "2005-09-01",
      "enrollments":
      { "StudentID": "6", "CourseID": "1045", "Grade": "B" },
    "courses":
      { "CourseID": "3141", "Title": "DjAngo", "Credits": "2", },
    },
  ]

  constructor(private router: ActivatedRoute) { }
  ngOnInit() {
    this.router.paramMap.subscribe(para => {
      this.pid = +para.get('Id');
    });
    this.sinhvien = this.students.find(p => p.Id === this.pid);
    this.pageTitle = this.sinhvien.LastName;

  };

}
