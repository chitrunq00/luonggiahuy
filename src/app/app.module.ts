import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ListProductComponent } from './list-product/list-product.component';
import { CartAdminComponent } from './cart-admin/cart-admin.component';
import { YourCardComponent } from './your-card/your-card.component';
import { Bai1Component } from './bai1/bai1.component';
import { Bai2Component } from './bai2/bai2.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductdetailComponent,
    ListProductComponent,
    CartAdminComponent,
    YourCardComponent,
    Bai1Component,
    Bai2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
