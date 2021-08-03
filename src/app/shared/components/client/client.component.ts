import { Component, NgModule, OnInit } from '@angular/core';
import 'devextreme/data/odata/store';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DxDataGridModule, DxFormModule, DxLoadIndicatorModule } from 'devextreme-angular';

@Component({
  selector: 'app-client',
  templateUrl: 'client.component.html',

})
export class clientComponent implements OnInit {
  dataSource1: any;
  priority: any[];
  constructor(private httpService: HttpClient) {
    this.httpService
      .get('https://localhost:44393/api/Client/GetAllClients')
      .subscribe((data) => {
        this.dataSource1 = data as string[];
      });
    this.priority = [
      { name: 'High', value: 4 },
      { name: 'Urgent', value: 3 },
      { name: 'Normal', value: 2 },
      { name: 'Low', value: 1 },
    ];
  }
  ngOnInit(){}
 
}
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DxFormModule,
    DxLoadIndicatorModule,
    DxDataGridModule,
  ],
  declarations: [ clientComponent ],
  exports: [ clientComponent ]
})
export class ClientModule { }