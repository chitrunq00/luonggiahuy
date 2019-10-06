import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab5-form2',
  templateUrl: './lab5-form2.component.html',
  styleUrls: ['./lab5-form2.component.css']
})
export class Lab5Form2Component implements OnInit {
  employee = {
    name: null,
    salary: null,
    gender: 'nam',
    rate: 0

  }
  list = [
    {
      "age": "dưới 25",
      "rate": 0.07
    },
    {
      "age": "từ 25 tới 40",
      "rate": 0.17
    },
    {
      "age": "trên 40",
      "rate": 0.15
    }
  ]
  constructor() { }

  ngOnInit() {
  }
  tienthuong() {
    let s = 0
    if (this.employee.gender == "nu"){
      s = this.employee.salary * this.employee.rate + 100000
    }
    else
      s = this.employee.salary * this.employee.rate
    return s
  }
}
