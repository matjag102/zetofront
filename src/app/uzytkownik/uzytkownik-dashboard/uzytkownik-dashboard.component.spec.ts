import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UzytkownikDashboardComponent } from './uzytkownik-dashboard.component';

describe('UzytkownikDashboardComponent', () => {
  let component: UzytkownikDashboardComponent;
  let fixture: ComponentFixture<UzytkownikDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UzytkownikDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UzytkownikDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
