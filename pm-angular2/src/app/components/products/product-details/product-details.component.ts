import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product-list/product-list.component';

@Component({
  templateUrl: './product-details.component.html',//no selector decorator as we will not nest this component into another.
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  pageTitle: string;
  product: IProduct;

  constructor() {

    this.pageTitle = "Product Description";
    

   }

  ngOnInit() {
  }

}
