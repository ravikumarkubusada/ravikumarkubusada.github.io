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
  GlobalConstants = GlobalConstants;
  productList: [ProductModel];
  sortBy = 1;
  count = 0;

  sortingDropDownList = [
    { "name": "Name Asc", "value": 1 },
    { "name": "Name Desc", "value": 2 },
    { "name": "Price HTL", "value": 3 },
    { "name": "Price LTH", "value": 4 }]

  constructor(private apiCall: ApiCallService, private manageProducts: ManageProductsService) { }

  ngOnInit(): void {
    this.getAllTheProducts();
  }

  getAllTheProducts() {
    this.productList = this.manageProducts.getUpdatedProducts();

    if (!this.productList.length) {
      this.apiCall.getApiCall('assets/dummyData/productsListData.json').subscribe(res => {
        sessionStorage.setItem('db', JSON.stringify(res));
        this.productList = this.manageProducts.getUpdatedProducts();
      });
    }
    return this.productList;
  }

  addProductToCart(product) {
    this.count++;
    this.manageProducts.updateCartCount(this.count);
    this.manageProducts.addToCart(product);
  }

  updateRange(toRange) {
    this.productList = this.getAllTheProducts();
    this.productList.filter(o => {
      return (o.price <= toRange) ? true : false;
    })
  }

}
