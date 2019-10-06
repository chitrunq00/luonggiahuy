import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab5-form3',
  templateUrl: './lab5-form3.component.html',
  styleUrls: ['./lab5-form3.component.css']
})
export class Lab5Form3Component implements OnInit {
  tien = {
    "soluong": null,
    "thanhtien": null,
  }
  danhsach =
 [
    {
      "soluong": null,
      "ten": "nước ngọc",
      "dongia": 10000
    },
    {
      "soluong": null,
      "ten": "cafe đen",
      "dongia": 20000
    },
    {
      "soluong": null,
      "ten": "thuốc lá",
      "dongia": 18000
    }
  ]
  constructor() { }

  ngOnInit() {
  }
  thanhtien(){
    let s=0;
   let a=10000;
    if(this.danhsach[0].soluong ==1)
    s= a;
    if(this.danhsach[0].soluong ==2)
    s= a+a;
    if(this.danhsach[0].soluong ==3)
    s= a+a;
    return s;
  }
}
