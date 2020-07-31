import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  products: [ProductModel];
  constructor() { }

  updateStore(product: ProductModel) {
    this.products = this.getProducts();

    this.products.forEach(obj => {
      if (obj.id === product.id) {
        obj.selectedQuantity = product.selectedQuantity;
        obj.quantity = product.quantity;
        obj.addedToCart = product.addedToCart;
      }
    });

    sessionStorage.setItem('db', JSON.stringify(this.products));
  }

  getProducts(): [ProductModel] {
    return JSON.parse(sessionStorage.getItem('db') || '[]');
  }
}
