

export class SpotAvailable {
    id: number;
    is_occupied: boolean;
    duration: number;
    totalPrice: number;
    startDate: any;
    startTime?: string;
    endTime?: string;
    qrCodeNumber: number;
 

    constructor() {
        this.id = 0;
        this.is_occupied = false;
        this.duration = 0;
        this.totalPrice = 0;
        this.startDate = '';
        this.startTime = '';
        this.endTime = '';        
        this.qrCodeNumber = 0;  
        


    }

  
      
   
}