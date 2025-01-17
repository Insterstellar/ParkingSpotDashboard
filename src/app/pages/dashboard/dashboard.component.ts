import { Component,  DestroyRef,  inject, OnInit } from '@angular/core';
import{takeUntilDestroyed} from '@angular/core/rxjs-interop'

import { ParkingSpot } from '../../models/parkingSpotInterface';
import { ParkingServiceService } from '../../parking/parkingservice/parking-service.service';


import { ChangeDetectorRef,  effect ,  PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { Amenity } from '../../parking/parkingClasses/AmenityClass';


@Component({
  selector: 'app-dashboard',
  imports: [ChartModule,],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent  implements OnInit {


    amenityitems:Amenity[]=[
        new Amenity(1,"EVCharging"),
        new Amenity(2,"FreeWifi"),
        new Amenity(3,"Parking"),
        new Amenity(4,"Restroom"),
        new Amenity(5,"Shower"),
        new Amenity(6,"Toilet"),
        new Amenity(7,"WashingMachine"),
      ];
  data: any;

  options: any;

  platformId = inject(PLATFORM_ID);
 




  destroyRef=inject(DestroyRef);

 //parkingSpotsService= inject(ParkingServiceService.getAllParkingSpots());
 constructor(private parkingSpotsService: ParkingServiceService, private cd: ChangeDetectorRef) { }
 parkingspots:ParkingSpot[]=[];

  ngOnInit(): void {
    this.initChart();
    this.fetchAllParkingSpots();
  
  }





  fetchAllParkingSpots() {
    this.parkingSpotsService.getAllParkingSpots().pipe(takeUntilDestroyed(this.destroyRef)).subscribe(data => {
      this.parkingspots = data;
 

      console.log(data[0].name);
    });
  }




  initChart() {
    if (isPlatformBrowser(this.platformId)) {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--p-text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
        const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Users',
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
                    yAxisID: 'y',
                    tension: 0.4,
                    data: [28, 48, 40, 19, 86, 27, 90]
                },
               
            ]
        };

        this.options = {
            stacked: false,
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        drawOnChartArea: false,
                        color: surfaceBorder
                    }
                }
            }
        };
        this.cd.markForCheck();
    }
}

}
//https://20c1-2a01-799-b22-4d00-14c-f744-19b8-87d8.ngrok-free.app/api/v1/parking/all