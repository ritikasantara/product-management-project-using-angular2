import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()


export class ProductGuardGuard implements CanActivate {

  constructor(private _router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      let id = +next.url[1].path;

      if(isNaN(id) || id < 1){

        alert('Invalid Product ID');
        
        //start a new navigation to redirect to product list page
        this._router.navigate(['/products']);

        //Abort current navigation
        return false;

      };

    return true;
  }


}
