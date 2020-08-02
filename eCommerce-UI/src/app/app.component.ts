import { Component, OnInit } from '@angular/core';
import { RouteConstants } from './constants/route.constants';
import { GlobalConstants } from './constants/global.constants'
import { ManageProductsService } from './services/products/manage-products.service';
import { Router } from '@angular/router';
/**
 *
 *
 * @export
 * @class AppComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  routeConstants = RouteConstants;
  globalConstants = GlobalConstants;
  count = 0;
  searchText = '';

  /**
   *Creates an instance of AppComponent.
   * @param {ManageProductsService} manageProductSvc
   * @param {Router} router
   * @memberof AppComponent
   */
  constructor(
    private manageProductSvc: ManageProductsService,
    private router: Router) { }

  /**
   *
   *
   * @memberof AppComponent
   */
  ngOnInit(): void {
    this.manageProductSvc.cast.subscribe(res => this.count = res);
    if (this.count === null || this.count === undefined) {
      this.count = this.manageProductSvc.getCarCount();
    }
  }

  /**
   *
   *
   * @param {*} searchTxt
   * @memberof AppComponent
   */
  searchProducts(searchTxt: string) {
    if (searchTxt == null || searchTxt == undefined || searchTxt.length == 0) {
      this.router.navigateByUrl('');
    }

    if (searchTxt.length > 2) {
      this.router.navigateByUrl(`search/${searchTxt}`);
    }
  }

}
