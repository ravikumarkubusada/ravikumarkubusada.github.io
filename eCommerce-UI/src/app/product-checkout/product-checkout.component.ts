import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { ApiCallService } from '../services/api/api-call.service';
import { ManageProductsService } from '../services/products/manage-products.service';

@Component({
  selector: 'app-product-checkout',
  templateUrl: './product-checkout.component.html',
  styleUrls: ['./product-checkout.component.scss']
})
export class ProductCheckoutComponent implements OnInit {
  selectedProducts = [];
  total: number = 0;
  subTotal: number = 0;
  constructor(private manageProductSvc: ManageProductsService) { }

  ngOnInit(): void {
    this.getAllTheSelectedProducts();
  }


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
          return (o.id == product.id);
        });
      }
    }

    this.manageProductSvc.removeFromCart(product);
    this.calculateSum();
  }

}
