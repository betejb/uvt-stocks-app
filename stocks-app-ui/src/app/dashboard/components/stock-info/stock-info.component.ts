import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stock-info',
  templateUrl: './stock-info.component.html',
  styleUrls: ['./stock-info.component.scss'],
})
export class StockInfoComponent {
  @Input() title: string = 'Stocks';
  @Input() value: string = '25689';
  @Input() isIncrease: boolean = false;
  @Input() increaseValue = 20;
  @Input() iconName: string = 'home';
  @Input() iconColor: string = 'blue';
}
