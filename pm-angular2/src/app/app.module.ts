import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductFilterPipe } from './components/products/product-list/product-filter.pipe';
import { StarComponent } from './components/star/star.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { AboutComponent } from './components/about/about.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProductGuardGuard } from './guards/product-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent,
    ProductDetailsComponent,
    AboutComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
    
  ],
  providers: [ ProductGuardGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
