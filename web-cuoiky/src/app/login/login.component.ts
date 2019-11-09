import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../homepage.service';
import {Student} from '../login/student'
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	students: Student[];
	studentLocal = [];
	userLocal = [];
	listDataLocal = [];
	login = [];
	_submit = false;
	Checkbox = false;
	username = "teonv";
	password = "iloveyou";

  constructor(private _homepage: HomepageService) { }

  
  ngOnInit() {
        this.getUsers();
		this.userLocal = JSON.parse(localStorage.getItem('users'));
		this.studentLocal = JSON.parse(localStorage.getItem('students'));		
		this.listDataLocal = this.studentLocal.concat(this.userLocal);
  }
  getUsers() {
	this._homepage.getListUsers().subscribe(data => this.students = data);
}
	onSubmit(formUser: NgForm) {
		let count = 0;
		if (formUser.valid) {
			this._submit = true;
			for (var i = 0; i < this.listDataLocal.length; i++) {
				if (this.listDataLocal[i].username == formUser.value.username &&
					this.listDataLocal[i].password == formUser.value.password) {
					this.login.push(this.listDataLocal[i]);				
					count++;
					console.log(this.listDataLocal)
				}
			}
			if (count == 0) {
				alert("Thông Tin Không Chính Xác")
			} else {
				localStorage.setItem("Login", JSON.stringify(this.login));
				window.location.replace("");
			}
		}
		else if (count == 0 && formUser.dirty) {
			alert("Thông Tin Không Chính Xác")
		}
		else {
			alert("Vui Lòng Nhập Thông Tin")
		}
	}
	checkIn() {
		let arr = JSON.parse(localStorage.getItem('Login'))
	
		if(arr !== null){
			alert("Vui Lòng Đăng Xuất Tài Khoản")
			return false;	
		}
	}
}
