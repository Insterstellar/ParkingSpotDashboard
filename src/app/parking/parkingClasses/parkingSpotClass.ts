import { ReviewParking } from "./ReviewParking";
import { SpotAvailable } from "./SpotAvailableClass";
import { Amenity } from "./AmenityClass";
import { Gallery } from "./GalleryClass";
export class ParkingSpotClass {
    id: number;
    name: string;
    description: string;
    location: string;
    price: string;
    distance: string;
    numberOfSpots: number;
    spotAvailable: SpotAvailable[];
    reviewParking: ReviewParking[];
    coordinates: string;
    gallery: Gallery[];
    amenities: Amenity[];

   constructor() {
        this.id = 0;
        this.name = '';
        this.description = '';
        this.location = '';
        this.price = '';
        this.distance = '';
        this.numberOfSpots = 0;
        this.spotAvailable = [];
        this.reviewParking = [];
        this.coordinates = '';
        this.gallery = [];
        this.amenities = [];
    }

    
}