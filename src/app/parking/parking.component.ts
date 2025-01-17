import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ParkingSpot } from '../models/parkingSpotInterface';
import { NgFor } from '@angular/common';
import { ParkingServiceService } from './parkingservice/parking-service.service';


@Component({
  selector: 'app-parking',
  imports: [RouterOutlet, RouterLink, NgFor],
  templateUrl: './parking.component.html',
  styleUrl: './parking.component.css'
})
export class ParkingComponent implements OnInit {
  destroyRef=inject(DestroyRef);
  constructor(private parkingService: ParkingServiceService) { }
  parkingspots:ParkingSpot[]=[];
  editParkingSpot : ParkingSpot |null = null;





  ngOnInit(): void {
    this.fetchAllParkingSpots();

    
  }


  fetchAllParkingSpots() {
    this.parkingService.getAllParkingSpots().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data:ParkingSpot[]) => {
        this.parkingspots = data;
       console.log(data);
    
    });
  }

  //@param
  //@throw
  getEditParking(parkingSpot:ParkingSpot){
    this.parkingService.setParkingSpot(parkingSpot);
  }

 deleteParking(numberId:number){
  this.parkingService.deleteParkingSpot(numberId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data:any) => {
    console.log(data);
    this.fetchAllParkingSpots();
  });

 }


}
