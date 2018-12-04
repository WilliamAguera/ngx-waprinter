import {CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule} from '@angular/core';
import {NgxWaPrinterComponent} from './ngx-waprinter.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {NgxWaPrinterService} from './services/ngx-waprinter.service';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [NgxWaPrinterComponent],
  exports: [NgxWaPrinterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NgxWaPrinterModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxWaPrinterModule,
      providers: [
        NgxWaPrinterService
      ],
    };
  }
}
