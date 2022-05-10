import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajSaleComponent } from './dodaj-sale.component';

describe('DodajSaleComponent', () => {
  let component: DodajSaleComponent;
  let fixture: ComponentFixture<DodajSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodajSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
