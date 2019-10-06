import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ListProductComponent } from './list-product/list-product.component';
import { CartAdminComponent } from './cart-admin/cart-admin.component';
import { YourCardComponent } from './your-card/your-card.component';
import { Bai1Component } from './bai1/bai1.component';
import { Bai2Component } from './bai2/bai2.component';
import { StudentsComponent } from './students/students.component';
import { DetailstudentsComponent } from './detailstudents/detailstudents.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { Lab5Form11Component } from './lab5-form11/lab5-form11.component';
import { Lab5Form12Component } from './lab5-form12/lab5-form12.component';
import { Lab5Form2Component } from './lab5-form2/lab5-form2.component';
import { Lab5Form3Component } from './lab5-form3/lab5-form3.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductdetailComponent,
    ListProductComponent,
    YourCardComponent,
    CartAdminComponent,
    Bai1Component,
    Bai2Component,
    StudentsComponent,
    DetailstudentsComponent,
    ShoppingCartComponent,
    Lab5Form11Component,
    Lab5Form12Component,
    Lab5Form2Component,
    Lab5Form3Component,
  ],
  imports: [
    NgxPaginationModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot([ 
    //   { path: '', 	component: ListProductComponent }, 
    //   {path: 'your-card', component:YourCardComponent},
    //   {path: 'list-product', component:ListProductComponent},
    //   {path: 'shopping-cart', component:ShoppingCartComponent},
    //   { path: 'list-product/:productId', component: ProductdetailComponent },
    //   { path: '**', redirectTo: 'list-product', pathMatch: 'full' },     
    // ])   
    RouterModule.forRoot([
      { path: '', component: StudentsComponent },
      { path: 'list-product', component: ListProductComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'lab5form11', component: Lab5Form11Component },
      { path: 'lab5form12', component: Lab5Form12Component },
      { path: 'lab5form2', component: Lab5Form2Component },
      { path: 'lab5form3', component: Lab5Form3Component },
      { path: 'list-product/:productId', component: ProductdetailComponent },
      { path: 'students', component: StudentsComponent },
      { path: 'detailstudents', component: StudentsComponent },
      { path: 'students/:Id', component: DetailstudentsComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
