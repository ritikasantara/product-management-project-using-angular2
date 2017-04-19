import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ AppComponent } from './app.component';
import{ WelcomeComponent } from './components/welcome/welcome.component';
import{ ProductListComponent } from './components/products/product-list/product-list.component';
import { AboutComponent } from './components/about/about.component';
import{ ProductDetailsComponent } from './components/products/product-details/product-details.component';

const appRoutes: Routes = [

    {
        path: '',
        component: WelcomeComponent
    },
    {
        path: 'products',
        component: ProductListComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'product_details/:id',
        component: ProductDetailsComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);