import { Component, OnInit } from '@angular/core';
import { RouteConstants } from './constants/route.constants';
import { ManageProductsService } from './services/products/manage-products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  RouteConstants = RouteConstants;
  title = 'eCommerce-UI';
  count = 0;

  constructor(private manageProductSvc: ManageProductsService) { }

  ngOnInit(): void {
    this.manageProductSvc.cast.subscribe(res => this.count = res);
  }
}
