import { Component, OnInit } from '@angular/core';
import {shomepage} from '../home-page/homepages';
import { HomepageService } from '../homepage.service';
@Component({
  selector: 'app-dmmh',
  templateUrl: './dmmh.component.html',
  styleUrls: ['./dmmh.component.css']
})
export class DmmhComponent implements OnInit {
  public Subjects:shomepage[];
  Subject:any;
  pid;
  
  constructor(private _homepage:HomepageService) { }

  ngOnInit() {
    this._homepage.getAllSubjects().subscribe(data => this.Subjects = data);
    this.Subject= this.Subjects.find(p=>p.Id=== this.pid); 
    console.log(this.Subject)
  }
  
}
