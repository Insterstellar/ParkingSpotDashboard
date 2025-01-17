import { Component } from '@angular/core';
import {  RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


import "primeicons/primeicons.css";

import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ParkingspotownersComponent } from "./parkingspotowners/parkingspotowners.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'ParkingDashBoard';






    
}




