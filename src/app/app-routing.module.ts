import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PrintLayoutComponent} from './print-layout/print-layout.component';
import {NgxWaPrinterComponent} from '../../projects/ngx-waprinter/src/lib/ngx-waprinter.component';

const routes: Routes = [
  {
    path: 'print',
    outlet: 'print',
    component: PrintLayoutComponent,
    children: [
      {path: 'wa-printer/:printerData', component: NgxWaPrinterComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
