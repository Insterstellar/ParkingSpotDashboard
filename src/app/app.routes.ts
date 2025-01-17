import { Routes } from '@angular/router';
import { ParkingComponent } from './parking/parking.component';
import { EditparkingComponent } from './parking/editparking/editparking.component';
import { ParkingspotownersComponent } from './parkingspotowners/parkingspotowners.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddParkingComponent } from './parking/add-parking/add-parking.component';

export const routes: Routes = [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: DashboardComponent },
        { path: 'parking', component: ParkingComponent },
        { path: 'editparking', component: EditparkingComponent },
        { path: 'spotowners', component: ParkingspotownersComponent },
        { path: 'addParking', component: AddParkingComponent },
];
