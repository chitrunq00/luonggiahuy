import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  items = [];

  addToCart(product) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
//   delete(){
//     this.product = this.product.filter((value)=>{
//       return this.items.id != product.id;
//     });
//   }
 }
