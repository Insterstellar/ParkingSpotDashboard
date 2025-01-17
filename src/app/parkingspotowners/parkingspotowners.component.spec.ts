import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingspotownersComponent } from './parkingspotowners.component';

describe('ParkingspotownersComponent', () => {
  let component: ParkingspotownersComponent;
  let fixture: ComponentFixture<ParkingspotownersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkingspotownersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingspotownersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
