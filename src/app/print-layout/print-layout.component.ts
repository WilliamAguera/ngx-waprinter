import { Component, OnInit } from '@angular/core';
import {NgxWaPrinterService} from '../../../projects/ngx-waprinter/src/lib/services/ngx-waprinter.service';

@Component({
  selector: 'app-print-layout',
  templateUrl: './print-layout.component.html',
  styleUrls: ['./print-layout.component.css']
})
export class PrintLayoutComponent implements OnInit {

  public data = [];

  public columns = [];

  constructor(public waPrinterService: NgxWaPrinterService) {
    waPrinterService.getInstantDataReport().subscribe(value => {
      this.data = value;
      this.columns = Object.keys (this.data[0]);
    });
  }

  ngOnInit() {

  }

}
