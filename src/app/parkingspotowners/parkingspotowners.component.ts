import { Component } from '@angular/core';
import { ActiveusersComponent } from "../usermanagementfolder/activeusers/activeusers.component";
import { BannedusersComponent } from "../usermanagementfolder/bannedusers/bannedusers.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parkingspotowners',
  imports: [ActiveusersComponent, BannedusersComponent, CommonModule],
  templateUrl: './parkingspotowners.component.html',
  styleUrl: './parkingspotowners.component.css'
})
export class ParkingspotownersComponent {

  activeUserInformation: String = "active";
  //data: Photo[] = [];

  showBanned(activeTable: String) {
   this.activeUserInformation = activeTable;

    console.log("showbanned");
  }

}