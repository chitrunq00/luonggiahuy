import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-your-card',
  templateUrl: './your-card.component.html',
  styleUrls: ['./your-card.component.css']
})
export class YourCardComponent implements OnInit {
  cart = [
    {
      "cartID": "pd100",
      "IDcart": 1,
      "cartName": "Lap Top",
      "cartQuatity": "tang",
      "cartAction": "yes",
      "cartPrice": 100000,
      "cartImages": "laptop.jpg",
      "sl": 0
    },
    {
      "cartID": "pd101",
      "IDcart": 2,
      "cartName": "IPhone",
      "cartQuatity": "tang",
      "cartAction": "yes",
      "cartPrice": 120000,
      "cartImages": "ipone.jpg",
      "sl": 0
    },
    {
      "cartID": "pd102",
      "IDcart": 3,
      "cartName": "Ti Vi",
      "cartQuatity": "tang",
      "cartAction": "yes",
      "cartPrice": 110000,
      "cartImages": "tivi.jpg",
      "sl": 0
    },
    {
      "cartID": "pd103",
      "IDcart": 4,
      "cartName": "Tai Phone",
      "cartQuatity": "tang",
      "cartAction": "yes",
      "cartPrice": 80000,
      "cartImages": "taipone.jpg",
      "sl": 0
    },
  ]
  constructor() { }

  ngOnInit() {
  }
  TotalPrice() {
    let s = 0;
    this.cart.forEach(function (item) {
      s = s + item.cartPrice * item.sl
    })
    return s;
  }


  increase(IDcart) {
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].IDcart == IDcart) {
        this.cart[i].sl++;
      }
    }
  }
  reduction(IDcart) {
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].IDcart == IDcart && this.cart[i].sl > 0) {
        this.cart[i].sl--;
      }
    }
  }
}
