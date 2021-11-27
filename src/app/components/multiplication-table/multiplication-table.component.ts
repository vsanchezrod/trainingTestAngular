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

  ngOnInit(): void {}

  /**
   * Multiplicate number
   * @param n
   */
  multiplicate(n: number): number {
    return this.numberSelected * n;
  }

}
