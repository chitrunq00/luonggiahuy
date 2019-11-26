import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HomepageService } from '../homepage.service';
import { Student } from '../login/student';

@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
	students: Student[];
	listUsers = [];
	studentLocal = [];
	_submit = false;
	checkbox = true;
	check = false;;
	id: number = 4;
	username: string = "uer1";
	password: string = "User1";
	repass: string = "User1";
	fullname: string = "Thành Viên ";
	email: string = "thanhvien1@gmail.com";
	gender: string = "true";
	birthday: string = "2000-10-02";
	schoolfee: number =0;
	marks = 0;

	constructor(private _home: HomepageService) { }

	ngOnInit() {
		this.getUsers();
		this.studentLocal = JSON.parse(localStorage.getItem('students'));
	}
	getUsers() {
		this._home.getListUsers().subscribe(data => this.students = data);
	}

	onSubmit(formUser: NgForm) {
		let count1 = 0;
		let count2 = 0;
		let count3 = 0;

		for (var i = 0; i < this.students.length; i++) {
			if (this.students[i].username == formUser.value.username) {
				count1++;
			}
		}
		for (var i = 0; i < this.listUsers.length; i++) {
			if (this.listUsers[i].username == formUser.value.username) {
				count2++;
			}
		}
		for (var i = 0; i < this.studentLocal.length; i++) {
			if (this.studentLocal[i].username == formUser.value.username) {
				count3++;
			}
		}

		if (count1 == 0 && count2 == 0 && count3 == 0) {
			this._submit = true;
			this.listUsers.push({
				id: this.id++,
				username: this.username,
				password: this.password,
				fullname: this.fullname,
				email: this.email,
				gender: this.gender,
				birthday: this.birthday,
				schoolfee: this.schoolfee,
				marks: this.marks
			});
			this._home.addStudent(
				this.username, this.password, this.fullname, this.email,
				this.gender, this.birthday, this.schoolfee, this.marks
			);
		}
		else {
			alert('Tên Đăng Nhập Đã Tồn Tại')
		}
	}

	onSM(formUser: NgForm) {
		if (formUser.value.repass !== formUser.value.password) {
			alert('Mật Khẩu Phải Giống Nhau')
			return false;
		}
	}

	onReset(formUser: NgForm) {
		formUser.reset();
	}
}
