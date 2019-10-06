import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab5-form12',
  templateUrl: './lab5-form12.component.html',
  styleUrls: ['./lab5-form12.component.css']
})
export class Lab5Form12Component implements OnInit {
  sinhvien={
    hovaten:null,
    ngaysinh:null,
    gioitinh:'nam',
    diem:0,
    hocluc:'rớt',
    
  }
  constructor() { }

  ngOnInit() {
  }
  xeploai(){
    if(this.sinhvien.diem < 5){
      this.sinhvien.hocluc="rớt";
    }else{
      this.sinhvien.hocluc="đậu";
    }
  }

}
