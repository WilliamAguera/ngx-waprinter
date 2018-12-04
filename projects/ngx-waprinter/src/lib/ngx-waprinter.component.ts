import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgxWaPrinterService} from './services/ngx-waprinter.service';


@Component ({
  selector: 'ngx-waprinter',
  templateUrl: './ngx-waprinter.component.html',
  styleUrls: ['ngx-waprinter.component.css']
})
export class NgxWaPrinterComponent implements OnInit {

  public documentData = [];

  constructor(route: ActivatedRoute,
              private routing: Router,
              private printService: NgxWaPrinterService) {
    this.documentData = JSON.parse(route.snapshot.params['printerData']);
    this.setData();
  }

  ngOnInit() {}


  private setData() {
    this.printService.setDataReport(this.documentData);
    this.printService.onDataReady();
  }

}
