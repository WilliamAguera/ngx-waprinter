import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgxWaPrinterService {

  isPrinting = false;

  private instantDataReport = [];

  constructor(private router: Router) {}

  print(documentName: string, documentData: any[]) {
    this.isPrinting = true;
    this.router.navigate(['/',
      { outlets: {
          'print': ['print', documentName, JSON.stringify(documentData)]
        }}]);
  }

  onDataReady() {
    setTimeout(() => {
      window.print();
      this.isPrinting = false;
      this.router.navigate([{ outlets: { print: null }}]);
    });
  }

  setDataReport(data) {
    this.instantDataReport = data;
  }

  getInstantDataReport(): Observable<any> {
    return new Observable((observer => {
      setTimeout(() => {
        observer.next(this.instantDataReport);
      }, 1);
    }));
  }

}
