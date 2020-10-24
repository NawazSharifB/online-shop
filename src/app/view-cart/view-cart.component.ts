import { CartService } from './../cart.service';
import { Subscription } from 'rxjs';
import { Product } from './../models/products.mode';
import { DataService } from './../data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  dSub: Subscription;

  constructor(private dataService: DataService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.dSub = this.dataService.cart$.subscribe( items => this.products = items);
  }

  ngOnDestroy(): void {
    this.dSub.unsubscribe();
  }

  removeItem(product: Product): void {
    this.cartService.removeFromCart(product);
  }

}
