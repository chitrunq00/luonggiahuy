import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
// import {  productdetail} from '../productdetail';
import { CartServiceService } from '../cart-service.service';
@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  pageTitle='';
  product: any;
  pid;
  listproducts=[
    {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "caychoi.jpg",
        "sl":1
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "xerua.jpg",
        "sl":1
    },
    {
        "productId": 3,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "caybua.jpg",
        "sl":1
    },
    {
        "productId": 4,
        "productName": "Saw",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2016",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "starRating": 3.7,
        "imageUrl": "caycua.jpg",
        "sl":1
    },
    {
        "productId": 5,
        "productName": "Video Game Controller",
        "productCode": "GMG-0042",
        "releaseDate": "October 15, 2015",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "starRating": 4.6,
        "imageUrl": "taycamgame.jpg",
        "sl":1
    },
  ];
  constructor(private route:ActivatedRoute, private CartServiceService:CartServiceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(para=>{
      this.pid = +para.get('productId');
    });
    this.product= this.listproducts.find(p=>p.productId===this.pid);
    this.pageTitle=this.product.productName;
  }
  addToCart(product){
    window.alert('Your product has been added to the cart!');
    this.CartServiceService.addToCart(this.product);
  }
}
