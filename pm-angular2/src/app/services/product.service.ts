import { Injectable } from '@angular/core';
import { IProduct } from '../components/products/product-list/product-list.component'

@Injectable()
export class ProductService {

  getProducts(): IProduct[]{

    return[

      {
        "productId" : 1,
        "productName" : "Louis Vuitton Tote Bag",
        "productCode" : "abc-123",
        "releaseDate" : "March 18, 2017",
        "description" : "Tote Bag....lorem ipsom h",
        "price" : 1099,
        "starRating" : 2.4,
        "imageUrl" : "http://uk.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-armand-open-tote-taurillon-leather-men-s-bags--M42683_PM2_Front%20view.jpg"
      },

      {
        "productId" : 2,
        "productName" : "Polyvore Satchel Bag",
        "productCode" : "pqr-456",
        "releaseDate" : "April 07, 2017",
        "description" : "Satchel Bag....lorem ipsom h",
        "price" : 1599,
        "starRating" : 4.6,
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
        "starRating" : 3.5,
        "imageUrl" : "http://www.bodenimages.com/productimages/productmedium/17wsum_am278_tan.jpg"
      }

    ];

  }

  constructor() { }

}

  
