import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product-list/product-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  templateUrl: './product-details.component.html',//no selector decorator as we will not nest this component into another.
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  pageTitle: string;
  product: IProduct;
  errorMessage: string;
  private sub: Subscription;

  constructor(private _route: ActivatedRoute, private _router: Router, private _productService: ProductService) {

    this.pageTitle = "Product Details";
    
   }

  ngOnInit(): void {

    // let id = +this._route.snapshot.params['id'];
    // this.pageTitle += `:  ${id}`;

    this.sub = this._route.params.subscribe(params => {

      let id = +params['id'];
      this.getProduct(id);

    });

  }

  ngOnDestroy(){

    this.sub.unsubscribe();

  }

  getProduct(id: number){

    this._productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);

  }

  onBack(): void{

    console.log('Back button clicked');
    this._router.navigate(['/products']);

  }

  onRatingClicked(message: string): void {

      this.pageTitle = 'Product Detail: ' + message;
      
  }

}
