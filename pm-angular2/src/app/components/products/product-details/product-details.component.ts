import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product-list/product-list.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-details.component.html',//no selector decorator as we will not nest this component into another.
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  pageTitle: string;
  product: IProduct;

  constructor(private _route: ActivatedRoute, private _router: Router) {

    this.pageTitle = "Product Details";
    
   }

  ngOnInit(): void {

    let id = +this._route.snapshot.params['id'];
    this.pageTitle += `:  ${id}`;
  }

  onBack(): void{

    console.log('back clicked');
    this._router.navigate(['/products']);

  }

}
