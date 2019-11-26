import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shomepage } from './home-page/homepages';
import { Student } from './login/student';
import {Quizs}from './detail-questions/quiz'
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
@Injectable({
	providedIn: 'root'
})
export class HomepageService {
	//lây du lieu login

	seconds: number;
	timer;
	//2duong dẫn lấy json
	urlsubject = '/assets/db/Subjects.json';
	urlsutdent = '/assets/db/Students.json';

	private StudentKey = 'students';
	private students: Student[];
	public setlogin = [];
	private ID = 3;
	constructor(private http: HttpClient, private storageService: LocalStorageService) { }
	//get data json of subject
	getAllSubjects(): Observable<shomepage[]> {
		return this.http.get<shomepage[]>(this.urlsubject);
	}
	//get username
	getListUsers(): Observable<Student[]> {
		return this.http.get<Student[]>(this.urlsutdent)
	};
	//get data json of detail subject
	getAlldetailSubject(Id: string): Observable<Quizs[]> {
		return this.http.get<Quizs[]>(`/assets/db/` + Id + `.json`);
	}
	loadLocalStorage() {
		this.students = this.storageService.getValue<Student[]>(this.StudentKey) || [];
	}
	updateLocalStorage() {
		this.storageService.setStudent(this.StudentKey, this.students);
	}

	addStudent(
		username: string, password: string, fullname: string, email: string,
		gender: string, birthday: string, schoolfee: number, marks: number
	) {
		const id = (this.students.length + this.ID) + 1;
		const newStudent = new Student(id, username, password, fullname, email, gender, birthday, schoolfee, marks);
		this.students.push(newStudent);
		this.updateLocalStorage();
	}
	onEditStudent(
		id: number, username: string, password: string,
		fullname: string, email: string, gender: string,
		birthday: string, schoolfee: number, marks: number
	) {
		const index = this.students.findIndex(s => s.id === id);
		const student = this.students[index];
		student.username = username;
		student.password = password;
		student.fullname = fullname;
		student.email = email;
		student.gender = gender;
		student.birthday = birthday;
		student.schoolfee = schoolfee;
		student.marks = marks;
		this.students.splice(index, 1, student);
		this.setlogin.splice(0, 1, student);
		localStorage.setItem("Login", JSON.stringify(this.setlogin));
		this.updateLocalStorage();
	}
}
