import {Component, OnInit} from '@angular/core';
import {NgxWaPrinterService} from '../../projects/ngx-waprinter/src/lib/services/ngx-waprinter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  public data = [];

  constructor(private waPrinterService: NgxWaPrinterService) {
  }

  ngOnInit() {
    this.data = this.createRandomData(50);
  }

  print() {
    this.waPrinterService.print('wa-printer', this.data);
  }

  createRandomData(count: number) {
    const firstNames = ['Adilson', 'William', 'Silvio', 'Maicon', 'Jaisson', 'Moacyr', 'Marcio', 'Laura', 'Anne', 'Nige'],
      lastNames = ['Finance', 'Development Sector', 'Sales', 'Analytic Quality', 'Technical Support', 'Reception'],
      cities = ['Seattle', 'Tacoma', 'Kirkland', 'Redmond', 'London', 'Philadelphia', 'New York', 'Seattle', 'London', 'Boston'],
      titles = ['Accountant', 'Vice President, Sales', 'Sales Representative', 'Technical Support', 'Sales Manager', 'Web Designer',
        'Software Developer'],
      status = ['Away', 'Online', 'Offline', 'Busy'],
      year = [1970, 1975, 1980, 1998, 1999, 2000, 2005, 2010, 2012, 2015, 2020, 2025, 2030, 2032, 2035, 2040, 2050];

    return Array(count).fill({}).map((_, idx) => ({
        id: idx + 1,
        firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
        lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
      })
    );
  }
}

