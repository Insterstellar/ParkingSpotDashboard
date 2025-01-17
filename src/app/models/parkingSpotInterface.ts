export type Root = ParkingSpot[]

export interface ParkingSpot {
  id: number
  name: string
  description: string
  location: string
  price: string
  distance: string
  numberOfSpots: number
  spotAvailable: SpotAvailable[]
  reviewParking: ReviewParking[]
  coordinates: string
  gallery: Gallery[]
  amenities: Amenity[]
}

export interface SpotAvailable {
  id: number
  is_occupied: boolean
  duration: number
  totalPrice: number
  startDate: any
  startTime?: string
  endTime?: string
  qrCodeNumber: number
}

export interface Gallery {
  id: number
  imageUrl: string
}

export interface Amenity {
  id: number
  name: string
}

export interface ReviewParking {
    stars: number
    comment: string
  }
  

