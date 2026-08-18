export interface ServiceItem {
  id: string;
  title: string;
  category: 'celebration' | 'corporate' | 'studio' | 'dinner';
  tagline: string;
  startingPrice: string;
  numericPrice: number;
  description: string;
  capacity: string;
  image: string;
  features: string[];
  idealFor: string;
  badge?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  event: string;
  location: string;
  rating: number;
  avatar: string;
  date: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  caption: string;
}

export interface VenueAmenity {
  icon: string;
  title: string;
  description: string;
}

export interface BookingFormState {
  fullName: string;
  email: string;
  phone: string;
  eventDate: string;
  serviceType: string;
  estimatedBudget: string;
  guestCount: number;
  timeSlot: string;
  message: string;
}
