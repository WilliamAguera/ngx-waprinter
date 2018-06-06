# NgxWaPrinter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.5.

  [Live Demo](https://ngx-waprinter.stackblitz.io/)

  [Source Code](https://stackblitz.com/edit/ngx-waprinter)

## Installation

1. Having NPM installation run the following command on your terminal to install it:

    ```bash
    $ npm install ngx-waprinter --save
    ```
    
## Usage
The use of the components is basically the importation of the main module and the use of the directives in its application.

   ```typescript
   import { BrowserModule } from '@angular/platform-browser';
   import { FormsModule } from '@angular/forms';
   import { NgModule } from '@angular/core';
   import {NgxWaprinterModule} from 'ngx-waprinter';
   
   import { AppComponent } from './app.component';
   
   @NgModule({
     declarations: [
       AppComponent
     ],
     imports: [
       BrowserModule,
       NgxWaprinterModule
     ],
     providers: [],
     bootstrap: [AppComponent]
   })
   export class AppModule { }
   ```  
Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->

<ngx-waprinter #waPrint>
  <ngx-waprinter-header>
    <div class="header" fxLayout="row" fxLayoutAlign="space-between center">
      <div class="header-data">
        <h2>{{ 'Pacients Report' | uppercase }}</h2>
        <span>{{ 'Initial Date: 2018/06/01' | uppercase }}</span>
        <span>{{ 'Final Date: 2018/06/04' | uppercase }}</span>
      </div>
      <img src="../assets/img/mediclogo.jpg" width="70" height="70">
    </div>
  </ngx-waprinter-header>
</ngx-waprinter>

<button class="wa-button" (click)="waPrint.print(data)">Print Report</button>

```
### Feedback
Feedback is always welcome.


## License

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this
software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
