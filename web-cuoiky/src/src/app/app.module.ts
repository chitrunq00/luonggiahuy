import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';//form
import { RouterModule } from '@angular/router';//router

import {HttpClientModule} from '@angular/common/http';//get hhtpcline
import {NgxPaginationModule} from 'ngx-pagination';//phan trang
import { CountdownModule } from 'ngx-countdown'; //time


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailQuestionsComponent } from './detail-questions/detail-questions.component';
import { LoginComponent } from './login/login.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent } from './contact/contact.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { AnswerComponent } from './answer/answer.component';
import { NavComponent } from './nav/nav.component';
import { DmmhComponent } from './dmmh/dmmh.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DetailQuestionsComponent,
    LoginComponent,
    PasswordResetComponent,
    ChangePasswordComponent,
    EditPasswordComponent,
    RegistrationComponent,
    ContactComponent,
    IntroduceComponent,
    AnswerComponent,
    NavComponent,
    DmmhComponent
  ],
  imports: [
    BrowserModule,
   
    CountdownModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    AppRoutingModule,
    RouterModule.forRoot([
     
      { path: '', component: LoginComponent },
      { path: 'home', component: HomePageComponent },
      { path: 'home-page/:mid', component: HomePageComponent },
      { path: 'login', component: LoginComponent },
      { path: 'answar', component: AnswerComponent },
      { path: 'introduce', component: IntroduceComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'password-reset', component: PasswordResetComponent },
      { path: 'change-password', component: ChangePasswordComponent },
      { path: 'edit-password', component: EditPasswordComponent },
     
      { path: 'detail-questions/:mid', component: DetailQuestionsComponent },
      { path: 'registration', component: RegistrationComponent },
      // { path: 'list-product/:productId', component: ProductdetailComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
