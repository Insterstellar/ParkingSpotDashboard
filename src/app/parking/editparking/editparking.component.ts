import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ParkingServiceService } from '../parkingservice/parking-service.service';
//import { ParkingSpotClass } from '../parkingClasses/parkingSpotClass';
import { ParkingSpotClass } from '../parkingClasses/parkingSpotClass';
import { FormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-editparking',
  imports: [FormsModule,CommonModule],
  templateUrl: './editparking.component.html',
  styleUrl: './editparking.component.css'
})
export class EditparkingComponent implements OnInit {
destroyRef=inject(DestroyRef);
isVisible:boolean=false;

  constructor(private getSelectedParkingSpot:ParkingServiceService) {}
  
  parkingSpotClass: ParkingSpotClass = new ParkingSpotClass();

  ngOnInit(): void {
    const editableParkingSpot=this.getSelectedParkingSpot.getSelectedParkingSPot();
    if(editableParkingSpot==null){
      console.log("editable parking spot is null");
    }
    else{
   
      this.parkingSpotClass=editableParkingSpot;
      
    }
   
   
  }



 updateParkingSpot(){
  //to use form valiator and better error handling
  if(this.parkingSpotClass.name==""){
    alert("Please enter a name for the parking spot");
    return;
  } else {
    
    this.getSelectedParkingSpot.updateParkingSpot(this.parkingSpotClass).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data:ParkingSpotClass) => {
  
 
      this.isVisible=true;
     
      });
  }





 
 
}




}
