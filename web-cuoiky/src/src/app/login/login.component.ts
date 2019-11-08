import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../homepage.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username 
  password 
  configurl ='https://cuong-dev1-api.herokuapp.com/studentsTwo?fbclid=IwAR1zGL8Urjfb6BaDhwaXk4LJ5cGKL24MlKLQh3kaRXjf0h1MlxGbSgfbRNg'
  students: any;
  constructor(private _homepage: HomepageService, private http: HttpClient,private router: Router) { }

  getconfig() {
    return this.http.get(this.configurl)
  }
  ngOnInit() {
    this.getconfig().subscribe(data => {
      this.students = data;
      console.log(data);
    })
  }
  check() {
    let ui = false;
    this.students.forEach(element => {
      if (element.username == this.username && element.password == this.password) {
        alert('bạn đăng nhập thành công')
        ui = true;
        this.router.navigate(["/home"]);
      }
    });
    if (ui == false)
      alert('tài khoản không đúng')
  }

}
