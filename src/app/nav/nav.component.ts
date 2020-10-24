import { Subscription } from 'rxjs';
import { DataService } from './../data.service';
import { Product } from './../models/products.mode';
import { CartService } from './../cart.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

  totalCartItem = 0;
  dSub: Subscription;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {

    this.dSub = this.dataService.cart$.subscribe(products => {
      this.totalCartItem = 0;
      products.forEach( product => {
        this.totalCartItem += product.inCart;
      });
    });
  }

  ngOnDestroy(): void {
    this.dSub.unsubscribe();
  }


}