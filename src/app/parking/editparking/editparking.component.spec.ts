import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditparkingComponent } from './editparking.component';

describe('EditparkingComponent', () => {
  let component: EditparkingComponent;
  let fixture: ComponentFixture<EditparkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditparkingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditparkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
