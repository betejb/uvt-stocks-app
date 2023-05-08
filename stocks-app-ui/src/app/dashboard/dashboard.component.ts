import { StocksAPIService } from './stocks-api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  items: Array<any> = [];

  constructor(private stockApiService: StocksAPIService) {
    let stocks = this.stockApiService.stocks;

    for (let item of stocks) {
      this.items.push({
        title: item.company,
        value: item.price_2007,
        isIncrease: item.price_2007 - item.price_2002 < 0 ? false : true,
        increaseValue: item.price_2007 - item.price_2002,
        iconName: 'query_stats',
        iconColor: this.stockApiService.getColor(),
      });
    }
  }
}
