export interface Place {
  id: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
  highlights?: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  estimatedDuration: number; // hours
}

export interface Country {
  id: string;
  name: string;
  code: string;
  description: string;
  image: string;
  places: Place[];
}

export interface RouteMetrics {
  distance: number;
  duration: number;
  days: number;
  cost: number;
}