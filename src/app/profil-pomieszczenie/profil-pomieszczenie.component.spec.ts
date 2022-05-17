import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilPomieszczenieComponent } from './profil-pomieszczenie.component';

describe('ProfilPomieszczenieComponent', () => {
  let component: ProfilPomieszczenieComponent;
  let fixture: ComponentFixture<ProfilPomieszczenieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilPomieszczenieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilPomieszczenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
