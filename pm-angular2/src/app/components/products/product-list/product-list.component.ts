import { Component,OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-list',
  moduleId: module.id,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string;
  imageWidth: number;
  imageMarginleft: number;
  imagePaddingleft: number;
  productTdpadding: number;
  products: IProduct[];
  showImage: boolean;
  listFilter: string;
  errorMessage: string;

  constructor(private _productService: ProductService) { 

    this.pageTitle = "Product List";
    this.imageWidth = 50;
    this.imageMarginleft = 23;
    this.showImage = false;
    this.productTdpadding = 12;
    this.listFilter = "Bag";

  

 }

     toggleImage(): void{

      this.showImage = !this.showImage;

    }

    ngOnInit(): void{

      console.log('Product-list component initiated..');
      this._productService.getProducts()
          .subscribe(products => this.products = products,
                      error => this.errorMessage = <any>error);
    

    }

    onRatingClicked(message: string): void{

      this.pageTitle = 'Product List: ' +message;

    }


   
}

 export interface IProduct{

      productId : number;
      productName : string;
      productCode : string;
      releaseDate : string;
      description : string;
      price : number;
      starRating : number;
      imageUrl : string;
       
    }

