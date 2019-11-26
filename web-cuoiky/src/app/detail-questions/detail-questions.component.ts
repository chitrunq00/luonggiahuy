import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../homepage.service';
//import { Detailpages } from './detailpage';
import { ActivatedRoute, Routes } from '@angular/router';
import {Quizs} from '../detail-questions/quiz'

@Component({
  selector: 'app-detail-questions',
  templateUrl: './detail-questions.component.html',
  styleUrls: ['./detail-questions.component.css']
})
export class DetailQuestionsComponent implements OnInit {
 
 
  page = 1;
	rowpage = 1;
  //bien lay đáp án

//lấy time
  showTime = true;
	counter = 0;
	setSecond = 3600;
	interval = null;
	onShowPage = false;
  resultPoint = false;
  
	answers = [];
	point = 0;
	public quiz: Quizs[]=[];
  constructor(private _homepage: HomepageService, private route: ActivatedRoute) { }
  ngOnInit() {
   this.getQuiz();
  }
  getQuiz() {
		this.route.paramMap.subscribe(para => {
			const Id = para.get('mid');
			this._homepage.getAlldetailSubject(Id).subscribe(data => this.quiz = data)
		});
	}

  dongho() {
    var minute = 60;
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
  startTime() {
		this.onShowPage = true;
		clearInterval(this.interval);
		var timer = document.getElementById('timer');
		timer.innerHTML = this.convertTime(this.setSecond - this.counter);
		this.interval = setInterval(() => {
			this.counter++;
			timer.innerHTML = this.convertTime(this.setSecond - this.counter);
			if ((this.setSecond - this.counter) <= 0) {
				clearInterval(this.interval);
				this.setSecond = 3600;
				this.counter = 0;
				timer.innerHTML = "Thời Gian Đã Hết!";
			}
		}, 1000);
	}

	endTime() {
		this.resultPoint = false;
		clearInterval(this.interval);
		document.getElementById('timer-2').innerHTML = this.convertTime(this.counter);
		document.getElementById('result').style.display = 'block';
		document.getElementById('training').style.display = 'none';
	}

	resetTime() {
		clearInterval(this.interval);
		document.getElementById('timer').innerHTML = "60':00";
		this.setSecond = 3600;
		this.counter = 0;
		this.answers= [];
  }
  convertTime(s) {
		var timer = document.getElementById('timer');
		var min = Math.floor(s / 60);
		var sec = s % 60;
		var minute = (min < 10) ? "0" + min : min;
		var sencond = (sec < 10) ? "0" + sec : sec;
		return minute + "'" + ':' + sencond;
  }
  pointTest() {
		var sum = 0;
		for (var i = 0; i < this.quiz.length; i++) {
			if (this.answers[i] == this.quiz[i].AnswerId) {
				sum += this.quiz[i].Marks;
				this.point = sum;
			}
		}
	}

  tongsocau() {
		return this.quiz.length;
  }
  prePage() {
		if (this.page > 1) {
			this.page--;
		}
	}

	nextPage() {
		if (this.quiz.length / this.rowpage > this.page) {
			this.page++;
		}
	}

	firstPage() {
		this.page = 1;
	}

	lastPage() {
		this.page = this.quiz.length;
	}
}


