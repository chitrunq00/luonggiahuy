import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ListProductComponent } from './list-product/list-product.component';
import { CartAdminComponent } from './cart-admin/cart-admin.component';
import { YourCardComponent } from './your-card/your-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductdetailComponent,
    ListProductComponent,
    CartAdminComponent,
    YourCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
