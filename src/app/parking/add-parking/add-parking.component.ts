import { Component, DestroyRef, inject,ChangeDetectorRef, OnInit, ViewChild, ElementRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ParkingSpotClass } from '../parkingClasses/parkingSpotClass';
import { ParkingServiceService } from '../parkingservice/parking-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { Amenity } from '../parkingClasses/AmenityClass';
import { Gallery } from '../parkingClasses/GalleryClass';

@Component({
  selector: 'app-add-parking',
  imports: [FormsModule,CommonModule,NgFor],
  templateUrl: './add-parking.component.html',
  styleUrl: './add-parking.component.css'
})

export class AddParkingComponent  {

 // @ViewChild('fileInput') fileInput!: ElementRef;
  //bergen:number[1,2,3,4,5,6,7,8,9,10];
 gallery:Gallery[]=[];

  
  destroyRef=inject(DestroyRef);
  newAmenities:Amenity[]=[];
  amenity:String="EVCharging";
  nothing1:String="";
  amenityitems:Amenity[]=[
    new Amenity(1,"EVCharging"),
    new Amenity(2,"FreeWifi"),
    new Amenity(3,"Parking"),
    new Amenity(4,"Restroom"),
    new Amenity(5,"Shower"),
    new Amenity(6,"Toilet"),
    new Amenity(7,"WashingMachine"),
    new Amenity(8,"lighting"),
    new Amenity(9,"airconditioning"),
    new Amenity(10,"elevator"),
  ];
  //https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg
  imageAddress:string="https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg";
  newParkingSpot:ParkingSpotClass=new ParkingSpotClass();
  constructor(private saveParkingSpot:ParkingServiceService, private cdr: ChangeDetectorRef) {}

  MAX_IMAGES = 5;
  openFileBrowser() {
   // this.fileInput.nativeElement.click();
  }

  handleFileInput(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      //const fileList: FileList = input.files;
      const files = Array.from(input.files);
      const filesToUpload = files.slice(0, this.MAX_IMAGES - this.gallery.length);

      if (filesToUpload.length === 0) {
        alert('You have reached the maximum number of images allowed.');
        return;
      }

 
       
        filesToUpload .forEach((file, index)=> {
          const reader = new FileReader();
          reader.onload = (e: any) => {
            this.gallery.push(
              new Gallery(Date.now()+index,e.target.result));
          };
          reader.readAsDataURL(file);
        });
      }
  }



  addAminity(amenityselect:String){
   // const selectedAmenity = this.amenityitems.find(amenity => amenity.name === amenityselect);


    this.amenityitems.forEach(amenity=>{
      if(amenity.name==amenityselect){
        
        if(!this.newAmenities.some(x=>x.id===amenity.id)){
          this.newAmenities.push(amenity);
           console.log('Updated newAmenities:', this.newAmenities);
         // this.cdr.detectChanges();
          //this.nothing1=this.newAmenities[0].name; 
        }
       // this.cdr.detectChanges(); 
      
      //  this.newAmenities.push(amenity);
        this.newAmenities.forEach(amenity=>{
          

          console.log("---------------------------------------------------------------------------");
          console.log("this is the total number of amenities : "+this.newAmenities.length);

          console.log("this is the amenity : "+amenity.name);
          console.log("this is the amenity id : "+amenity.id);
          console.log("---------------------------------------------------------------------------");
        });}
      
    });
   // this.newAmenities.push(amenity);

   

  }
  
 
 




  addParkingSpot(){
  
    if(this.newParkingSpot.name===null){
      alert("Please enter deatils for the parking spot");
      return;
    }
    else{
      console.log("the is "+this.newParkingSpot.name);
      this.amenityitems.forEach(amenity=>{
        if(amenity.name===this.amenity){
               this.newAmenities.push(amenity);


               



               console.log("this is the total number of amenities : "+this.newAmenities.length);
               this.newAmenities.forEach(amenity=>{
                console.log("this is the amenity : "+amenity.name);
                console.log("this is the amenity id : "+amenity.id);
              });
        }
      });
 

    this.saveParkingSpot.addParkingSpot(this.newParkingSpot).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data:ParkingSpotClass) => {
      
    
     
      });
  }}

}
