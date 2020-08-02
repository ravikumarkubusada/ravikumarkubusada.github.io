import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../services/api/api-call.service';
import { GlobalConstants } from './../constants/global.constants';
import { ManageProductsService } from '../services/products/manage-products.service';
import { ActivatedRoute, Route } from '@angular/router';
import { RouteConstants } from '../constants/route.constants';


@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.scss']
})
export class ProductCatalogComponent implements OnInit {
  globalConstants = GlobalConstants;
  routeConstants = RouteConstants;
  productList = [];
  sortBy = 1;

  sortingDropDownList = [];

  constructor(private apiCall: ApiCallService,
    private manageProducts: ManageProductsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.sortingDropDownList = this.globalConstants.sortingDropDownList;

    this.activatedRoute.params.subscribe(res => {
      const searchText = res['searchtext'];
      if (searchText != undefined && searchText != null && searchText.length > 0) {
        this.filterProductsTxt(searchText);
      } else {
        this.getAllTheProducts();
      }
    });
  }

  filterProductsTxt(searchText: any) {
    this.productList = this.getAllTheProducts();

    this.productList = this.productList.filter(o => {
      const res = (o.name.toLowerCase().match(searchText.toLowerCase()));
      return (res != null && res.length > 0) ? true : false;
    });

  }

  filterProductsWithPrice(toRange: number) {
    this.productList = this.getAllTheProducts();
    this.productList = this.productList.filter(o => {
      return (o.price <= toRange) ? true : false;
    })
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

}
