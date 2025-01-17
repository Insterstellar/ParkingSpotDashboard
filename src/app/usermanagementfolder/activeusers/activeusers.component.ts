import { CommonModule, NgClass, NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ParkingSpot } from '../../models/parkingSpotInterface';



@Component({
  selector: 'app-activeusers',
  imports: [CommonModule,  NgFor],
  templateUrl: './activeusers.component.html',
  styleUrl: './activeusers.component.css'
})
export class ActiveusersComponent  {
  parkingSpots: ParkingSpot[] = [];


 

}

