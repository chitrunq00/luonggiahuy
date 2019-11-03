import { Component, OnInit } from '@angular/core';
import {GuitarsService} from '../DAL/guitars.service';

@Component({
  selector: 'app-card-guitar',
  templateUrl: './card-guitar.component.html',
  styleUrls: ['./card-guitar.component.css']
})
export class CardGuitarComponent implements OnInit {
guitars:any;
  constructor(private _guitar:GuitarsService) { }

  ngOnInit() {
    this.guitars=this._guitar.getItems();
    console.log(this.guitars);
  }
  delete(iddd){
    var a = confirm ('bạn có muốn xóa sản phẩm này không');
    if ( a == true){
      const index= this.guitars.findIndex( word => word.Id === iddd);
      this.guitars.splice(index , 1);
    } else {
      return false;
    }
  }
  TotalPrice() {
    let s = 0;
    this.guitars.forEach(function (item) {
      s = s + item.price * item.sl
    })
    return s;
  }
  increase(ID) {
    for (let i = 0; i < this.guitars.length; i++) {
      if (this.guitars[i].cid == ID) {
        this.guitars[i].sl++;
      }
    }
  }
  reduction(ID) {
    for (let i = 0; i < this.guitars.length; i++) {
      if (this.guitars[i].cid == ID && this.guitars[i].sl > 0) {
        this.guitars[i].sl--;
      }
    }
  }
  
}
