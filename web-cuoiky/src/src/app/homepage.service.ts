import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shomepage } from './home-page/homepages';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

seconds:number;
timer;
//2duong dẫn lấy json
  url = '/assets/db/Subjects.json';
  url1 = '/assets/db/Students.json';


  constructor(private http: HttpClient) { }
//get data json of subject
  getAllSubjects(): Observable<shomepage[]> {
    return this.http.get<shomepage[]>(this.url);
  }
  // getAllstudent():Observable<logins[]>{
  //   return this.http.get<logins[]>(this.url1);
  // }
  //get data json of detail subject
  getAlldetailSubject(Id: string) {
    return this.http.get(`/assets/db/` + Id + `.json`);
  }
  
}
