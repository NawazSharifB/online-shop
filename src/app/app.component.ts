import { DataService } from './data.service';
import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';

import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'online-shop';
  private mediaSub: Subscription;

  constructor(private cdRef: ChangeDetectorRef,
              private mediaObserver: MediaObserver,
              public dataService: DataService) {}
  ngOnInit(): void {
    // localStorage.clear();
    this.mediaSub = this.mediaObserver.asObservable().subscribe( (change: MediaChange[]) => {
      // console.log(change[0].mqAlias);

      this.dataService.pageSize.next(change[0].mqAlias);
    });

    this.dataService.fetchData();
  }

  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }
}
