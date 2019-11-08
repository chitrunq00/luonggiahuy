import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../homepage.service';
//import { Detailpages } from './detailpage';
import { ActivatedRoute, Routes } from '@angular/router';


@Component({
  selector: 'app-detail-questions',
  templateUrl: './detail-questions.component.html',
  styleUrls: ['./detail-questions.component.css']
})
export class DetailQuestionsComponent implements OnInit {
  public quiz:any;
  itemperpage: number = 1;
  curpage: number = 1;
  //bien lay time
  seconds:number;
  timer;
  constructor(private _homepage: HomepageService, private route: ActivatedRoute) { }


  ngOnInit() {
    //get dữ liệu chi tiêt dựa vào id
    this.seconds = 0;
    //---------------------------
    this.route.paramMap.subscribe(para => {
      const Id = para.get('mid');
      this._homepage.getAlldetailSubject(Id).subscribe(data => this.quiz = data)
      this.startimer();
    }
    );

  }
  //phân trang
  // next() {
  //  return this.curpage++;
  // }
  //lấy time 
  startimer() {
    this.timer = setInterval(() => {
      this.seconds++;
    }, 1000);
  }
  displaytime(){
    return Math.floor(this.seconds/3600)+':'+Math.floor(this.seconds/60)+':'+Math.floor(this.seconds % 60);
  }
 
}
