import { Component, OnInit, OnDestroy } from '@angular/core';

import 'rxjs/Rx';
import {Observable, Observer, Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numbersObsSubscription: Subscription;
  customObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000);
    this.numbersObsSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        // observer.error('this does not work');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        // observer.error('this does not work');
        observer.next('third package');
      }, 5000);
    });
    this.customObsSubscription = myObservable.subscribe(
      (data: string) => {console.log(data)},
      (error: string) => {console.log(error)},
      () => {console.log('completed')}
    );
  }

  ngOnDestroy() {
    this.customObsSubscription.unsubscribe();
    this.numbersObsSubscription.unsubscribe();
  }

}
