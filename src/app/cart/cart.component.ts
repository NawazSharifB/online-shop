import { Subscription } from 'rxjs';
import { CartService } from './../cart.service';
import { DataService } from './../data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { Product } from '../models/products.mode';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit, OnDestroy {

  dSub: Subscription;
  showTable = true;

  displayedColumns: string[] = ['Cancel', 'Picture', 'Title', 'Price', 'Edit', 'SubTotal'];

  constructor(public dataService: DataService,
              public route: ActivatedRoute,
              public viewportScroller: ViewportScroller,
              private cartService: CartService) { }

  ngOnInit(): void {
    let f = '';
    this.route.fragment.subscribe( d => f = d);
    // console.log(f);
    this.viewportScroller.scrollToAnchor(f);

    this.dSub = this.dataService.cart$.subscribe(() => {
      this.showTable = false;
      setTimeout(() => this.showTable = true, 50);
    });
  }

  ngOnDestroy(): void {
    this.dSub.unsubscribe();
  }

  removeItem(element: Product): void {
    this.cartService.removeFromCart(element);
  }

}
