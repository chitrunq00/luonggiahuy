import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { GuitarComponent } from './guitar/guitar.component';
import { DetailguitarComponent } from './detailguitar/detailguitar.component';
import { CardGuitarComponent } from './card-guitar/card-guitar.component';

@NgModule({
  declarations: [
    AppComponent,
    GuitarComponent,
    DetailguitarComponent,
    CardGuitarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: GuitarComponent },
      { path: 'home', component: GuitarComponent },
      { path: 'home/:cid', component: GuitarComponent },
      { path: 'detail/:pid', component: DetailguitarComponent },
      { path: 'detail', component: DetailguitarComponent },
      { path: 'yourcart', component: CardGuitarComponent },     
      // { path: 'list-product/:productId', component: ProductdetailComponent },
     
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
