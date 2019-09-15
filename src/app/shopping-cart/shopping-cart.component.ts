import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
products:any;
  constructor(private CartServiceService:CartServiceService) { }

  ngOnInit() {
this.products=this.CartServiceService.getItems();
  }
  delete(products){
    window.alert('Your product has been added to the cart!');
    this.CartServiceService.addToCart(this.products);
  }
}
