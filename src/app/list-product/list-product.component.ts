import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
pageTitle="list Product";
Isshow = true;

listproduct=[
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
]
  constructor() { }

  ngOnInit() {
  }
  AnHien() {
    this.Isshow = !this.Isshow;
  }


  TongTong(tien){
    let s=0;

    this.listproduct.forEach(function(Item)
    {
        s = s+Item.price*Item.sl

    })
    return s;
  }
  tang(productId){
    for(let i=0;i < this.listproduct.length; i++){
      if(productId==1){
      this.listproduct[0].sl++;
      break;
    }
   else 
   if(productId==2){
      this.listproduct[1].sl++;
      break;
    }
    else  if(productId==3){
      this.listproduct[2].sl++;
      break;
    }
    else if(productId==4){
      this.listproduct[3].sl++;
      break;
    }
    else if(productId==5){
      this.listproduct[4].sl++;
      break;
    }
    }
  }
  giam(productId){
    for(let i=0;i < this.listproduct.length; i++){
      if(productId==1){
      this.listproduct[0].sl--;
      break;
    }
   else 
   if(productId==2){
      this.listproduct[1].sl--;
      break;
    }
    else  if(productId==3){
      this.listproduct[2].sl--;
      break;
    }
    else if(productId==4){
      this.listproduct[3].sl--;
      break;
    }
    else if(productId==5){
      this.listproduct[4].sl--;
      break;
    }
    }
  }

}

