import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductModel } from 'src/app/models/product.model';
import { StorageService } from '../storage/storage.service';
/**
 *
 *
 * @export
 * @class ManageProductsService
 */
@Injectable({
  providedIn: 'root'
})
export class ManageProductsService {

  productList: [ProductModel];
  private productSubject = new BehaviorSubject<number>(null);
  cast = this.productSubject.asObservable();
  /**
   *
   *
   * @param {number} count
   * @memberof ManageProductsService
   */
  updateCartCount(count: number) {
    this.productSubject.next(count);
    this.updateCartCountToSs(count);
  }

  /**
   *
   *
   * @param {*} count
   * @memberof ManageProductsService
   */
  updateCartCountToSs(count) {
    this.store.updateCartCount(count);
  }

  getCarCount() {
    return this.store.getCartCount();
  }

  constructor(private store: StorageService) { }

  getUpdatedProducts(): [ProductModel] {
    return this.store.getProducts();
  }

  storeProducts(products: [ProductModel]) {
    return this.store.storeProducts(products);
  }

  addToCart(product: ProductModel) {
    product.quantity = product.quantity - 1;
    product.selectedQuantity = product.selectedQuantity + 1;

    const cartCount = this.getCarCount() + 1;
    this.updateCartCount(cartCount);

    this.store.updateStore(product);
  }

  removeFromCart(product: ProductModel) {
    product.addedToCart = false;
    product.quantity = product.quantity + 1;
    product.selectedQuantity = product.selectedQuantity - 1;

    const cartCount = this.getCarCount() - 1;
    this.updateCartCount(cartCount);

    this.store.updateStore(product);
  }
}
