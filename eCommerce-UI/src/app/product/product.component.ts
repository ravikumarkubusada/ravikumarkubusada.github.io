import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../models/product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: ProductModel;
  @Output() addProductToCart = new EventEmitter();
  constructor() { }

  ngOnInit(): void { }

  addToCart(product: any) {
    product.addedToCart = true;
    this.addProductToCart.emit(product);

  }

}
