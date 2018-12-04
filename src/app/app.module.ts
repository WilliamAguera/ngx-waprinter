import {BrowserModule} from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PrintLayoutComponent} from './print-layout/print-layout.component';
import {AppRoutingModule} from './app-routing.module';
import {NgxWaPrinterModule} from '../../projects/ngx-waprinter/src/lib/ngx-waprinter.module';

@NgModule({
  declarations: [
    AppComponent,
    PrintLayoutComponent,
  ],
  imports: [
    AppRoutingModule,
    NgxWaPrinterModule.forRoot(),
    BrowserModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
