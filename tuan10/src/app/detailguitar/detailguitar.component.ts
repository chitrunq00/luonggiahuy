import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import{GuitarsService} from '../DAL/guitars.service';
@Component({
  selector: 'app-detailguitar',
  templateUrl: './detailguitar.component.html',
  styleUrls: ['./detailguitar.component.css']
})
export class DetailguitarComponent implements OnInit {
  product : any;
  listproduct : any;
  features;
  cid:number;
  constructor(private _guitar:GuitarsService, private route:ActivatedRoute) { }

  ngOnInit() {

    const pid=+this.route.snapshot.paramMap.get('pid');
    this._guitar.getAllguitar().subscribe(p=>{
      this.listproduct=p;
      this.product=this.listproduct.find(x=>x.id==pid);
      this.features=this.product.newfeature;
      console.log(this.features);
    })
  }
  addToCart(guitars){
    window.alert('bạn đã thêm sản phẩm');
    this._guitar.addToCart(this.product);
  }
}