import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdytujSaleComponent } from './edytuj-sale.component';

describe('EdytujSaleComponent', () => {
  let component: EdytujSaleComponent;
  let fixture: ComponentFixture<EdytujSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdytujSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdytujSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
