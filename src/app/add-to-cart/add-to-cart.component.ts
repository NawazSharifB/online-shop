import { CartService } from './../cart.service';
import { Product } from './../models/products.mode';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {

  @Input()product: Product;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  reduceItem(): void {
    this.cartService.reduceToCart(this.product);
  }

  addItem(): void {
    this.cartService.addToCart(this.product);
  }

}
