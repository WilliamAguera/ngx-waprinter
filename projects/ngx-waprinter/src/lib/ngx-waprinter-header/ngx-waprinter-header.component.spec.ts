import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaPrintHeaderComponent } from './wa-print-header.component';

describe('WaPrintHeaderComponent', () => {
  let component: WaPrintHeaderComponent;
  let fixture: ComponentFixture<WaPrintHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaPrintHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaPrintHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
