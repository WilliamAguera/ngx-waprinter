import { Injectable } from '@angular/core';

let stylesContent = '';

@Injectable({
  providedIn: 'root'
})
export class NgxWaprinterService {

  constructor () {}

  print (node, styles) {
    this.getStyles(styles);
    let printContents, popupWin;
    printContents = node.innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=auto,width=auto');
    popupWin.document.open();
    popupWin.document.write (`
      <html>
        <head>
          <title>Print tab</title>
          <style type="text/css">
            ${stylesContent}
          </style>
        </head>
        <body onload="window.print();window.close()">${printContents}</body>
      </html>`);
    popupWin.document.close();
  }

  getStyles(styles) {
    for (let item = 0; item < styles.length; item++) {
      const str = styles[item];
      const style = str.innerText.replace(/\[[^)].*]/g, '');
      stylesContent += style.replace(/\s/g, '');
    }
  }
}
