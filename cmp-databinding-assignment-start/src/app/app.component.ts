import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(firedNumber: number) {
    console.log(firedNumber);
    console.log(this.oddNumbers);
    console.log(this.evenNumbers);
    if (firedNumber%2==0) {
      this.evenNumbers.push(firedNumber);
    } else{
      this.oddNumbers.push(firedNumber);
    }
  }
}
