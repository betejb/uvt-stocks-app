import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  items: Array<any> = [];

  constructor() {
    this.items.push({
      title: 'Stocks',
      value: '213121',
      isIncrease: true,
      increaseValue: 32,
      iconName: 'credit_card',
      iconColor: '#a0f7a6',
    });

    this.items.push({
      title: 'Bonds',
      value: '211',
      isIncrease: false,
      increaseValue: 32,
      iconName: 'money',
      iconColor: '#6e3904',
    });

    this.items.push({
      title: 'Crypto',
      value: '251',
      isIncrease: true,
      increaseValue: 32,
      iconName: 'currency_bitcoin',
      iconColor: '#cddc39',
    });

    this.items.push({
      title: 'EFTs',
      value: '213121',
      isIncrease: true,
      increaseValue: 32,
      iconName: 'sell',
      iconColor: '#607d8b',
    });
  }
}
