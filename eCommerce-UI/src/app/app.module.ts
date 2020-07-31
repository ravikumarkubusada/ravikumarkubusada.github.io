import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RangeSliderComponent } from './utils/range-slider/range-slider.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { ProductComponent } from './product/product.component';
import { ProductCheckoutComponent } from './product-checkout/product-checkout.component';
import { ApiCallService } from './services/api/api-call.service';
import { SortProductsPipe } from './pipes/sort-products.pipe';
import { ManageProductsService } from './services/products/manage-products.service';

@NgModule({
  declarations: [
    AppComponent,
    RangeSliderComponent,
    ProductCatalogComponent,
    ProductComponent,
    ProductCheckoutComponent,
    SortProductsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiCallService, SortProductsPipe, ManageProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
