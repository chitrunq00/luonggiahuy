import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-admin',
  templateUrl: './cart-admin.component.html',
  styleUrls: ['./cart-admin.component.css']
})
export class CartAdminComponent implements OnInit {
cartadmin=[
{
  "productId": 1,
  "FirstName": "Lương",
  "LastName": "Huy",
  "Email": "luonggiahuy257@gmail.com",
  "Action": "yes"
},
{
  "productId": 2,
  "FirstName": "Quỳnh",
  "LastName": "tây",
  "Email": "quynhvantay@gmail.com",
  "Action": "yes"
},
{
  "productId": 3,
  "FirstName": "Lương",
  "LastName": "Quân",
  "Email": "lunghongquan234@gmail.com",
  "Action": "yes"
},
{
  "productId": 4,
  "FirstName": "võ",
  "LastName": "Trung",
  "Email": "voquangtrung@gmail.com",
  "Action": "yes"
},
{
  "productId": 5,
  "FirstName": "Lê",
  "LastName": "kiều",
  "Email": "lethuykieu8887@gmail.com",
  "Action": "yes"
}
]
  constructor() { }
  ngOnInit() {
  }
}
