import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab5-form11',
  templateUrl: './lab5-form11.component.html',
  styleUrls: ['./lab5-form11.component.css']
})
export class Lab5Form11Component implements OnInit {
  hcn ={
    cd:null,
    cr:null,
    dt:null,
    cv:null
  }
  constructor() { }

  ngOnInit() {
  }
  tinh(){
    this.hcn.dt=this.hcn.cd*this.hcn.cr;
    this.hcn.cv=(this.hcn.cd+this.hcn.cr)*2;
  }
}
