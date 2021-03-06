import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { RouteConstants } from './constants/route.constants';
import { ProductCheckoutComponent } from './product-checkout/product-checkout.component';

const routes: Routes = [
  { path: RouteConstants.routeToProductCatalog, component: ProductCatalogComponent, pathMatch: 'full' },
  { path: RouteConstants.routeToProductCatalogWithsearchTxt, component: ProductCatalogComponent },
  { path: RouteConstants.routeToProductCatalog, component: ProductCatalogComponent },
  { path: RouteConstants.routeToProductCheckout, component: ProductCheckoutComponent },
  { path: '**', redirectTo: RouteConstants.routeToProductCatalog },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
