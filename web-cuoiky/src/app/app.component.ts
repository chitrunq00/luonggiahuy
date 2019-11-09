import { Component } from '@angular/core';
import {Student} from './login/student'
import {HomepageService} from './homepage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'questions';
  students: Student[];
  constructor(
		 private studentService: HomepageService
  ) { }
  ngOnInit() {
		this.studentService.loadLocalStorage();
		this.studentService.updateLocalStorage();
		this.studentService.getListUsers().subscribe(data => {
			this.students = data;
			localStorage.setItem("users", JSON.stringify(this.students));
		});
	}
}
