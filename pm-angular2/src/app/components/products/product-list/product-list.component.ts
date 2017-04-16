import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
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

  constructor() { 

    this.pageTitle = "Product List";
    this.imageWidth = 50;
    this.imageMarginleft = 23;
    this.showImage = false;
    this.productTdpadding = 12;
    this.listFilter = "Bag";

    this.products = [
      {
        "productId" : 1,
        "productName" : "Louis Vuitton Tote Bag",
        "productCode" : "abc-123",
        "releaseDate" : "March 18, 2017",
        "description" : "Tote Bag....lorem ipsom h",
        "price" : 1099,
        "starRating" : 3.9,
        "imageUrl" : "http://uk.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-armand-open-tote-taurillon-leather-men-s-bags--M42683_PM2_Front%20view.jpg"
      },

      {
        "productId" : 2,
        "productName" : "Polyvore Satchel Bag",
        "productCode" : "pqr-456",
        "releaseDate" : "April 07, 2017",
        "description" : "Satchel Bag....lorem ipsom h",
        "price" : 1599,
        "starRating" : 4.9,
        "imageUrl" : "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=161416907"

      },

      {

        "productId" : 3,
        "productName" : "Butterflies Sling Bag",
        "productCode" : "ghi-789",
        "releaseDate" : "Feb 25, 2017",
        "description" : "Sling Bag....lorem ipsom h",
        "price" : 1089,
        "starRating" : 5,
        "imageUrl" : "https://n1.sdlcdn.com/imgs/a/0/p/Butterflies-Quilted-Beige-Cross-Body-SDL888771080-1-6ae5d.jpg"
      },

      {

        "productId" : 4,
        "productName" : "Hidesign Pouch Bag",
        "productCode" : "def-678",
        "releaseDate" : "March 28, 2017",
        "description": "Tote Bag....lorem ipsom h",
        "price" : 1299,
        "starRating" : 3.6,
        "imageUrl" : "http://www.bodenimages.com/productimages/productmedium/17wsum_am278_tan.jpg"
      }

    ];

 }

     toggleImage(): void{

      this.showImage = !this.showImage;

    }

    ngOnInit(): void{
      console.log('OnInit initiated..');
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

