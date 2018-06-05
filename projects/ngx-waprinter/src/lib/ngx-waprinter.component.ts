import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {NgxWaprinterService} from './ngx-waprinter.service';

export interface DataPrint {
  data: Array<any>;
}

@Component ({
  selector: 'ngx-waprinter',
  templateUrl: './ngx-waprinter.component.html',
  styles: [
      `
      :host {
        position: absolute;
      }

      .wa-table-print {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        border: 1px solid #ccc;
        width: 100%;
      }

      .wa-thead-print {
        line-height: 30px;
        background: #dae0e8;
      }

      td, th {
        border: 1px solid #dddddd;
        text-align: center;
        padding: 8px;
      }

      tr:nth-child(even) {
        background-color: #f7f7f7;
      }

      section {
        visibility: hidden;
      }

    `
  ]
})
export class NgxWaprinterComponent implements OnInit {

  @ViewChild ('node') printNode;

  public columns;

  public data: Array<DataPrint> = [];

  constructor (private printService: NgxWaprinterService, private change: ChangeDetectorRef) {}

  ngOnInit () {}

  print (data: Array<DataPrint>) {
    this.data = data;
    this.columns = Object.keys (this.data[0]);
    this.change.detectChanges ();
    this.printService.print (this.printNode.nativeElement, document.getElementsByTagName ('style'));
  }
}
