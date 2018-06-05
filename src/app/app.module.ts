import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgxWaprinterModule} from '../../projects/ngx-waprinter/src/lib/ngx-waprinter.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgxWaprinterModule,
    FlexLayoutModule,
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
