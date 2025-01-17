import { TestBed } from '@angular/core/testing';

import { AllParkingSpotServiceService } from './all-parking-spot-service.service';

describe('AllParkingSpotServiceService', () => {
  let service: AllParkingSpotServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllParkingSpotServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
