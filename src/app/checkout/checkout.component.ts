import { Subscription } from 'rxjs';
import { DataService } from './../data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {

  dSub: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.dSub.unsubscribe();
  }

  totalCost(): number {
    let total = 0;

    this.dSub = this.dataService.cart$.subscribe( items => {
      items.forEach( item => {
        total += item.inCart * item.price;
      });
    });

    return total;
  }

}
