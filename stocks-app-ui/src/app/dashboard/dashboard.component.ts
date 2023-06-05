import { StocksAPIService } from './stocks-api.service';
import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  showChart: boolean = false;
  items: Array<any> = [];
  orderedItems: Array<any> = [];
  increment: number = 0;

  orderCriteria: Array<any> = [
    {
      id: 1,
      label: 'Order by Name',
    },
    {
      id: 2,
      label: 'Order by Price',
    },
    {
      id: 3,
      label: 'Order by Increase',
    },
    {
      id: 4,
      label: 'Show Increase',
    },
    {
      id: 5,
      label: 'Show Decrease',
    },
  ];

  constructor(private stockApiService: StocksAPIService) {
    this.parseStocks();
    Chart.register(...registerables);
  }

  onChangeOrder(orderItem: any) {
    console.log(orderItem);

    switch (orderItem.id) {
      case 1:
        this.orderedItems = this.items.sort((a, b) => a.title.localeCompare(b));
        break;
      case 2:
        this.orderedItems = this.items.sort((a, b) =>
          a.value.toString().localeCompare(b.value.toString())
        );
        break;
      case 3:
        this.orderedItems = this.items.filter((item) => item.isIncrease);

        this.orderedItems = this.orderedItems.sort((a, b) =>
          a.increaseValue.toString().localeCompare(b.increaseValue.toString())
        );
        break;
      case 4:
        this.orderedItems = this.items.filter((item) => item.isIncrease);
        break;
      case 5:
        this.orderedItems = this.items.filter((item) => !item.isIncrease);
        break;
    }
  }

  onFavoriteRefresh(title: string): void {
    this.stockApiService.updateFavorite(title);

    this.showChart = this.stockApiService.getFavorites().length > 0;

    this.parseStocks();

    this.increment++;
  }

  private parseStocks() {
    let stocks = this.stockApiService.stocks;
    this.items = [];
    this.orderedItems = [];

    this.showChart = this.stockApiService.getFavorites().length > 0;

    for (let item of stocks) {
      const element = {
        title: item.company,
        value: item.price_2007,
        isIncrease: item.price_2007 - item.price_2002 < 0 ? false : true,
        increaseValue: item.price_2007 - item.price_2002,
        iconName: 'query_stats',
        iconColor: this.stockApiService.getColor(),
        isFavorite: item.isFavorite,
      };

      this.items.push(element);

      this.orderedItems.push(element);
    }
  }
}
