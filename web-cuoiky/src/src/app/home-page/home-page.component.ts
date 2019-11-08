import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomepageService } from '../homepage.service';
import {ActivatedRoute} from '@angular/router';


import { shomepage } from './homepages';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
 
  itempage:4;
  currpage:number=1;
  public Subjects:shomepage[];
  Subject:any;
  pid;
  constructor(private _homepage: HomepageService , private route:ActivatedRoute) { }

  ngOnInit() {
    this._homepage.getAllSubjects().subscribe(data => this.Subjects = data);
    this.Subject= this.Subjects.find(p=>p.Id=== this.pid); 
    console.log(this.Subject)
  }
}
