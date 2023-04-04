import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Stocks';
  version = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<any>("/api/stocks/info")
      .pipe(tap(appInfo => this.version = appInfo.version))
      .subscribe();
  }

}
