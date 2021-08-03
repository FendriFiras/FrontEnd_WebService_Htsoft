import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  templateUrl: 'commandeClt.component.html',
})
export class CommandeCltComponent {
  dataSource: any;
  priority: any[];

  constructor() {
    this.dataSource = {
      store: {
        type: 'odata',
        url: 'https://localhost:44393/odata/CommandeClientOdata',
        key: 'num_cde_clt',
        version: 4,
      },
      select: [
        'num_cde_clt',
        'cod_clt',
        'rais_soc_clt',
        'etat_cde',
        'dat_cde',
        'totalttc',
        'transporteur',
        'societe',
        'dat_liv',
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