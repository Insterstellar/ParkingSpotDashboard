import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ParkingSpot } from '../../models/parkingSpotInterface';

@Component({
  selector: 'app-bannedusers',
  imports: [NgFor],
  templateUrl: './bannedusers.component.html',
  styleUrl: './bannedusers.component.css'
})
export class BannedusersComponent {
  parkingSpots:ParkingSpot[]=[];

}
