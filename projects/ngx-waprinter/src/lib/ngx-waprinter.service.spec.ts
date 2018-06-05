import { TestBed, inject } from '@angular/core/testing';

import { NgxWaprinterService } from './ngx-waprinter.service';

describe('NgxWaprinterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxWaprinterService]
    });
  });

  it('should be created', inject([NgxWaprinterService], (service: NgxWaprinterService) => {
    expect(service).toBeTruthy();
  }));
});
