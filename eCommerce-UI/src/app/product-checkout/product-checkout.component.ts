import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { ManageProductsService } from '../services/products/manage-products.service';
import { RouteConstants } from '../constants/route.constants';

@Component({
  selector: 'app-product-checkout',
  templateUrl: './product-checkout.component.html',
  styleUrls: ['./product-checkout.component.scss']
})
export class ProductCheckoutComponent implements OnInit {
  routeConstants = RouteConstants;
  selectedProducts = [];
  total: number = 0;
  /**
   *Creates an instance of ProductCheckoutComponent.
   * @param {ManageProductsService} manageProductSvc
   * @memberof ProductCheckoutComponent
   */
  constructor(private manageProductSvc: ManageProductsService) { }

  ngOnInit(): void {
    this.getAllTheSelectedProducts();
  }

  /**
   *
   *
   * @memberof ProductCheckoutComponent
   */
  getAllTheSelectedProducts() {
    const products = this.manageProductSvc.getUpdatedProducts();
    products.forEach(product => {
      if (product.selectedQuantity > 0) {
        this.selectedProducts.push(product);
      }
    });
    this.calculateSum();
  }

  calculateSum() {
    this.total = 0;
    this.selectedProducts.forEach(product =>
      this.total = this.total + (product.price * product.selectedQuantity)
    );
  }

  addQuantity(product: ProductModel) {
    this.manageProductSvc.addToCart(product);
    this.calculateSum();

  }
  removeQuantity(product: ProductModel) {

    if (product.selectedQuantity === 1) {
      if (this.selectedProducts.length === 1)
        this.selectedProducts = [];
      else {
        this.selectedProducts = this.selectedProducts.filter(o => {
          return !(o.id == product.id);
        });
      }
    }
    console.log(JSON.stringify(this.selectedProducts));
    this.manageProductSvc.removeFromCart(product);
    this.calculateSum();
  }

}
