import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParkingSpot } from '../../models/parkingSpotInterface';
import { environment } from '../../../environments/environment.development';



@Injectable({
  providedIn: 'root'
})
export class ParkingServiceService {

  //selectedSPot:ParkingSpot;
  private parkingSpotSelected:ParkingSpot | null = null;
  constructor( private http: HttpClient) { }
 
  private parkingendpoint: string='api/v1/parking/all';
  private updateparkingendpoint: string='api/v1/parking/update';
  private deleteparkingendpoint: string='api/v1/parking/delete';
  private addparkingendpoint: string='api/v1/parking/save';
  


getAllParkingSpots(): Observable<ParkingSpot[]> {
  return this.http.get<ParkingSpot[]>(environment.BASE_URL+this.parkingendpoint);
  //return this.http.get<ParkingSpot[]>("environment.SECONDARY_API_URL");

}

setParkingSpot(selectedSpot:ParkingSpot){
this.parkingSpotSelected=selectedSpot;

  //return selectedSpot;
}


getSelectedParkingSPot():ParkingSpot | null{
  return this.parkingSpotSelected;

}

updateParkingSpot(parkingSpot:ParkingSpot): Observable<ParkingSpot>{
   
   return this.http.put<ParkingSpot>(environment.BASE_URL+this.updateparkingendpoint+'/'+parkingSpot.id,parkingSpot);
}

deleteParkingSpot(parkingSpot:number){
   
   return this.http.delete<ParkingSpot>(environment.BASE_URL+this.deleteparkingendpoint+'/'+parkingSpot);  
}

addParkingSpot(parkingSpot:ParkingSpot): Observable<ParkingSpot>{
   
   return this.http.post<ParkingSpot>(environment.BASE_URL+this.addparkingendpoint,parkingSpot);
}


}
