import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../services/api/api-call.service';
import { ProductModel } from '../models/product.model';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.scss']
})
export class ProductCatalogComponent implements OnInit {

  productList: [ProductModel];

  constructor(private apiCall: ApiCallService) { }

  ngOnInit(): void {
    this.getAllTheProducts();
  }

  getAllTheProducts() {
    this.apiCall.getApiCall('assets/dummyData/productsListData.json').subscribe(res => {
      this.productList = res;
    })
  }

}
