import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannedusersComponent } from './bannedusers.component';

describe('BannedusersComponent', () => {
  let component: BannedusersComponent;
  let fixture: ComponentFixture<BannedusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannedusersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannedusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
