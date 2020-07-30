import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RangeSliderComponent } from './utils/range-slider/range-slider.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { ProductComponent } from './product/product.component';
import { ProductCheckoutComponent } from './product-checkout/product-checkout.component';
import { ApiCallService } from './services/api/api-call.service';

@NgModule({
  declarations: [
    AppComponent,
    RangeSliderComponent,
    ProductCatalogComponent,
    ProductComponent,
    ProductCheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiCallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
