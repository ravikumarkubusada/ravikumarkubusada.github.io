import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductModel } from 'src/app/models/product.model';
import { StorageService } from '../storage/storage.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class ManageProductsService {

  productList: [ProductModel];
  private productSubject = new BehaviorSubject<number>(null);
  cast = this.productSubject.asObservable();

  updateCartCount(count: number) {
    this.productSubject.next(count);
  }

  // private _products: BehaviorSubject<List<ProductModel>> = new BehaviorSubject([]);

  // public readonly _products: Observable<ProductModel[]> = this._products.asObservable();

  constructor(private store: StorageService) { }

  getUpdatedProducts(): [ProductModel] {
    return this.store.getProducts();
  }

  addToCart(product: ProductModel) {
    product.quantity = product.quantity - 1;
    product.selectedQuantity = product.selectedQuantity + 1;

    this.store.updateStore(product);
  }
  removeFromCart(product: ProductModel) {
    product.addedToCart = false;
    product.quantity = product.quantity + 1;
    product.selectedQuantity = product.selectedQuantity - 1;

    this.store.updateStore(product);
  }
}
