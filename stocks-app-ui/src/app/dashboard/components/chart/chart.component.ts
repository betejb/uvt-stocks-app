import { StocksAPIService } from './../../stocks-api.service';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit, OnChanges {
  public chart: any;
  showChart: boolean = true;
  @Input() test: number = 0;

  constructor(private stockApiService: StocksAPIService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('test');

    this.onRefresh();
  }

  onRefresh(): void {
    if (this.chart) {
      this.chart.destroy();
    }

    this.createChart();
  }

  last3Days() {
    var dates: any = Array.apply(null, new Array(3))
      .map(() => {
        return new Date();
      })
      .map((v, i) => {
        v.setDate(v.getDate() - i);
        return v;
      })
      .map((v) => {
        return this.formatDate(v);
      })
      .reverse()
      .join(',');

    return dates.split(',');
  }

  formatDate(date: any) {
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    date = mm + '/' + dd + '/' + yyyy;
    return date + '';
  }

  createChart() {
    let stocks = this.stockApiService.getFavorites();

    this.showChart = stocks.length > 0;

    if (stocks.length > 0) {
      console.log('is stoc');

      let datasets: Array<any> = [];

      for (let i = 0; i < stocks.length; i++) {
        datasets.push({
          label: stocks[i].company,
          data: [
            stocks[i].initial_price,
            stocks[i].price_2002,
            stocks[i].price_2007,
          ],
          backgroundColor: this.stockApiService.getColor(),
        });
      }

      this.chart = new Chart('MyChart', {
        type: 'line', //this denotes tha type of chart

        data: {
          // values on X-Axis
          labels: this.last3Days(),
          datasets: datasets,
        },
        options: {
          aspectRatio: 2.5,
        },
      });
    }
  }
}
