import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {
  isCountingDown = false;

  title = 'Quoteboard';
  remainingTime = 30;

  constructor() { }

  ngOnInit() {
  }

  countDown() {
    if (this.remainingTime > 0) {
      this.remainingTime -= 1;
      setTimeout(() => this.countDown(), 1000);
    } else {
      this.isCountingDown = false;
      this.remainingTime = 30;
      return alert('Done');
    }
  }

  startCountDown() {
    if (this.isCountingDown) {
      return alert('Counting down');
    }
    this.countDown();
    this.isCountingDown = true;
  }

}
