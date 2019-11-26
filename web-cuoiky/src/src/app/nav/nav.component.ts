import { Component, OnInit } from '@angular/core';
import {HomepageService} from '../homepage.service';
import {Route} from '@angular/router'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
	
	login = [];
	subject: any = [];
	showQuiz = true;
	userLogin = [
		{
			id: null,
			username: "TÀI KHOẢN",
			password: "",
			fullname: "",
			email: "",
			gender: "",
			birthday: "",
			schoolfee: null,
			marks: null
		}
	];
  constructor(private _home:HomepageService) { }

  ngOnInit() {
	this.login = JSON.parse(localStorage.getItem('Login'));
	this.getlogin();
	this.showTestQuiz();
  }
  getlogin() {
		if (this.login !== null) {
			this.userLogin = this.login;
		}
  }
  checkTT() {
		let arr = JSON.parse(localStorage.getItem('Login'));
		if (arr === null) {
			alert("Vui Lòng Đăng Nhập Tài Khoản Của Bạn");
	//	this.route.navigate(["/home"]);
		}
	}
	logout() {
		if (this.login == null) {
			alert("Bạn Chưa Đăng Nhập Tài Khoản")
			return false;
		} else {
			localStorage.removeItem("Login");
			window.location.replace("");
		}
	}
	checkTest() {
		let arr = JSON.parse(localStorage.getItem('Login'));
		if (arr === null) {
			alert("Vui Lòng Đăng Nhập Tài Khoản Của Bạn");
			window.location.replace("");
		}
	}
	showTestQuiz() {
		let arr = JSON.parse(localStorage.getItem('Login'));
		if (arr !== null) {
			this.showQuiz = true;
		} else {
			this.showQuiz = false;
		}
	} 
}
