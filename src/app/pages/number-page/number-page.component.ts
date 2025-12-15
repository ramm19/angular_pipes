import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-number-page',
  imports: [DecimalPipe, PercentPipe, CurrencyPipe],
  templateUrl: './number-page.component.html',
  styles: ``,
})
export default class NumberPageComponent {
  totalSales = signal(3_334_453.5567);
  percent = signal(0.4856);
}
