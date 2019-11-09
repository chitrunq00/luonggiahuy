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
  public quiz: any;
 
  itemperpage: number = 1;
  curpage: number = 1;
  //bien lay đáp án
  answer=[];
  point=0;

  
  constructor(private _homepage: HomepageService, private route: ActivatedRoute) { }


  ngOnInit() {
    //---------------------------
    this.route.paramMap.subscribe(para => {
      const Id = para.get('mid');
      this._homepage.getAlldetailSubject(Id).subscribe(data => this.quiz = data)
      this.dongho();
    }
    );
  }
  pointext(){
    var sum =0;
    for(var i= 0 ; i < this.quiz.length; i++){
      if(this.answer[i]==this.quiz[i].AnswerId){
        sum +=this.quiz[i].marks;
        this.point =sum;
      }
    }
  }



  dongho() {
    var minute = 50;
    var second = 0;
    var clear = setInterval(function () {
      if (minute == 0 && second == 0) {
        console.log(this.outOfTime)
        document.getElementById('dongho').style.display = 'none'
        clearInterval(clear);
        alert('Het gio lam bai');
      }
      else {
        second -= 1
        if (second < 0) {
          minute -= 1;
          second = 59;
        }
        document.getElementById('dongho').innerHTML = minute + 'm: ' + second + 's';
      }
    }, 1000)
  }

}
