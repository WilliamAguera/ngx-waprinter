import { NgModule } from '@angular/core';
import { NgxWaprinterComponent } from './ngx-waprinter.component';
import { NgxWaprinterHeaderComponent } from './ngx-waprinter-header/ngx-waprinter-header.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [NgxWaprinterComponent, NgxWaprinterHeaderComponent],
  exports: [NgxWaprinterComponent, NgxWaprinterHeaderComponent]
})
export class NgxWaprinterModule { }
