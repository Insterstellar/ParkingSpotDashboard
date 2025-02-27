import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParkingComponent } from './add-parking.component';

describe('AddParkingComponent', () => {
  let component: AddParkingComponent;
  let fixture: ComponentFixture<AddParkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddParkingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
