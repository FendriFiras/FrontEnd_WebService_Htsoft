import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  templateUrl: 'stockDepot.component.html',
})
export class stockDepotComponent {
  dataSource: any;
  priority: any[];

  constructor(private httpService: HttpClient) {
    this.httpService
      //.get('http://192.168.1.17:90/api/StockDepot/GetAllArticlesDepot')
      .get('https://localhost:44393/api/StockDepot/GetAllArticlesDepot')
      .subscribe((data) => {
        this.dataSource = data as string[];
      });

    this.priority = [
      { name: 'High', value: 4 },
      { name: 'Urgent', value: 3 },
      { name: 'Normal', value: 2 },
      { name: 'Low', value: 1 },
    ];
  }
}
