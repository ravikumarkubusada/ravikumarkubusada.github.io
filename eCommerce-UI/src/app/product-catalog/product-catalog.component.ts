import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../services/api/api-call.service';
import { ProductModel } from '../models/product.model';
import { GlobalConstants } from './../constants/global.constants';
import { ManageProductsService } from '../services/products/manage-products.service';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.scss']
})
export class ProductCatalogComponent implements OnInit {
  globalConstants = GlobalConstants;
  productList: [ProductModel];
  sortBy = 1;

  sortingDropDownList = [];

  constructor(private apiCall: ApiCallService, private manageProducts: ManageProductsService) { }

  ngOnInit(): void {
    this.sortingDropDownList = this.globalConstants.sortingDropDownList;
    this.getAllTheProducts();
  }

  getAllTheProducts() {
    this.productList = this.manageProducts.getUpdatedProducts();

    if (!this.productList.length) {
      this.apiCall.getApiCall('assets/dummyData/productsListData.json').subscribe(res => {
        this.productList = res;
        this.manageProducts.storeProducts(res);
      });
    }
    return this.productList;
  }

  addProductToCart(product) {
    this.manageProducts.addToCart(product);
  }

  updateRange(toRange) {
    this.productList = this.getAllTheProducts();
    this.productList.filter(o => {
      return (o.price <= toRange) ? true : false;
    })
  }

}
