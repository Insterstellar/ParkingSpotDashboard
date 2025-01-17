
import { HttpClient } from '@angular/common/http';
import { ParkingSpot } from '../../models/parkingSpotInterface';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AllParkingSpotServiceService  {
 

  constructor(private http: HttpClient) { }
 
  getAllParkingSpots(){
    return this.http.get<ParkingSpot[]>('https://api.publicapis.org/entries');

  }
}
