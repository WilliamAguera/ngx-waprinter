import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxWaprinterComponent } from './ngx-waprinter.component';

describe('NgxWaprinterComponent', () => {
  let component: NgxWaprinterComponent;
  let fixture: ComponentFixture<NgxWaprinterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxWaprinterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxWaprinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
