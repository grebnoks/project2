export class CounterService {
  numberOfSwitches = 0;

  increaseCallCount() {
    this.numberOfSwitches++;
    console.log("The current number of times that a user's activity status has been changed: " + this.numberOfSwitches);
  }
}
