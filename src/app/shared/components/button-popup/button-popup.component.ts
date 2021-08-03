import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DxFormModule, DxLoadIndicatorModule } from 'devextreme-angular';
import { DxDataGridModule } from 'devextreme-angular';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-button-popup',
  templateUrl: './button-popup.component.html',
  styleUrls: ['./button-popup.component.scss']
})
export class ButtonPopupComponent implements OnInit {
  closeResult: string ="";

  constructor(private modalService: NgbModal) { }
  ngOnInit(){}
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DxFormModule,
    DxLoadIndicatorModule,
    DxDataGridModule,
    
  ],
  declarations: [ ButtonPopupComponent ,  ],
  exports: [ ButtonPopupComponent ]
})
export class ButtonPopupModule { }