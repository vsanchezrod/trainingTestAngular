import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplication-table',
  templateUrl: './multiplication-table.component.html',
  styleUrls: ['./multiplication-table.component.scss']
})
export class MultiplicationTableComponent implements OnInit {

  numberSelected: number;
  range: Array<number>;

  constructor() {
    this.numberSelected = 5;
    this.range = Array.from({length: 10}, (_, i) => i + 1);
  }

  ngOnInit(): void {
    console.log('MultiplicationTableComponent ngOnInit');
  }

  getZero(): number {
    return 0;
  }

  multiplicate(n1: number, n2: number): number {
    return n1 * n2;
  }

  getAbsValue(n: number): number {
    if (n < 0) {
      return n * (-1);
    }
    else {
      return n;
    }
  }

  getFactorial(n: number): number {
    n = this.getAbsValue(n);
    if(n == 0 || n == 1) {
      return 1;
    }
    else {
      return n * this.getFactorial(n-1);
    }
  }

  sum(n: number): number {
    if (n <= 0) {
      return 0;
    }
    else {
      return n + this.sum(n-1);
    }
  }
}
