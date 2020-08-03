import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { SessionstorageKeys } from './sessionstorageKeys';
import { CharacterConstants } from './../../constants/character.constants';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  ssKeys = SessionstorageKeys;
  characterConstants = CharacterConstants;

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

    sessionStorage.setItem(this.ssKeys.dbKey, JSON.stringify(this.products));
  }

  getProducts(): [ProductModel] {
    return JSON.parse(sessionStorage.getItem(this.ssKeys.dbKey) || this.characterConstants.emptyArrayStr);
  }

  storeProducts(products: [ProductModel]) {
    sessionStorage.setItem(this.ssKeys.dbKey, JSON.stringify(products));
  }

  updateCartCount(countOfProducts) {
    sessionStorage.setItem(this.ssKeys.cartCountKey, countOfProducts);
  }

  getCartCount(): number {
    return +(sessionStorage.getItem(this.ssKeys.cartCountKey) || null);
  }
}
