import { StockItem } from './../models/stock-item';
import { StocksAPIService } from './../dashboard/stocks-api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-custom-search',
  templateUrl: './custom-search.component.html',
  styleUrls: ['./custom-search.component.scss'],
})
export class CustomSearchComponent {
  myControl = new FormControl('');
  options: string[] = [];
  filteredOptions: Observable<string[]> | null = null;
  stockItem: any;

  constructor(private stockApiService: StocksAPIService) {
    this.options = this.stockApiService.stocks.map((item) => item.company);
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  onOption(option: any): void {
    let itemData = this.stockApiService.stocks.filter(
      (item) => item.company == option
    )[0];

    this.stockItem = {
      title: itemData.company,
      value: itemData.price_2007,
      isIncrease: itemData.price_2007 - itemData.price_2002 < 0 ? false : true,
      increaseValue: itemData.price_2007 - itemData.price_2002,
      iconName: 'query_stats',
      iconColor: this.stockApiService.getColor(),
    };
  }

  resetValue() {
    this.myControl.setValue('');

    this.stockItem = null;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
