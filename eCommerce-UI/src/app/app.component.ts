import { Component, OnInit } from '@angular/core';
import { RouteConstants } from './constants/route.constants';
import { GlobalConstants } from './constants/global.constants'
import { ManageProductsService } from './services/products/manage-products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  routeConstants = RouteConstants;
  globalConstants = GlobalConstants;
  count = 0;

  constructor(private manageProductSvc: ManageProductsService) { }

  ngOnInit(): void {
    this.manageProductSvc.cast.subscribe(res => this.count = res);
    if (this.count === null || this.count === undefined) {
      this.count = this.manageProductSvc.getCarCount();
    }
  }
}
