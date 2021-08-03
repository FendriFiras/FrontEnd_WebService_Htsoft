import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  templateUrl: 'commandeClt.component.html',

})
export class CommandeCltComponent {
  dataSource: any;
  priority: any[];

  constructor(private httpService: HttpClient) {
    this.httpService
      .get('https://localhost:44393/api/CommandeClient/GetCommandes')
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
