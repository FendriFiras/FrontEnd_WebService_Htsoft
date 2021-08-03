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
    this.dataSource = {
      store: {
        type: 'odata',
        url: 'https://localhost:44393/odata/StockDepotOdata',
        key: 'cod_art',
        version: 4,
        // paginate: true,
        // pageSize: 10,
      },
      select: [
        'cod_art',
        'cod_dep',
        'desg_art',
        'qte_stk',
        'pvht',
        'pvttc',
        'cod_famp',
        'cod_cat',
        'reference',
      ],
      //filter: ['Product_Current_Inventory', '>', 0]
    };

    this.priority = [
      { name: 'High', value: 4 },
      { name: 'Urgent', value: 3 },
      { name: 'Normal', value: 2 },
      { name: 'Low', value: 1 },
    ];
  }
}