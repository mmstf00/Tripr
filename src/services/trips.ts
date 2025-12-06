import { apiClient } from "./api";

export interface SwipeItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  countryLabel: string;
  city: {
    id: string;
    name: string;
    coordinates: { lat: number; lng: number };
    estimatedDuration: number;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface RouteMetrics {
  distance: number;
  duration: number;
  days: number;
  cost: number;
}

export interface Trip {
  id: string;
  userId: string;
  name: string;
  country: string;
  countryId: string;
  items: SwipeItem[];
  routeMetrics?: RouteMetrics;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTripRequest {
  name: string;
  country: string;
  countryId: string;
  items: SwipeItem[];
  routeMetrics?: RouteMetrics;
}

export const tripsService = {
  async createTrip(data: CreateTripRequest): Promise<Trip> {
    const response = await apiClient.post<{ trip: Trip }>("/api/trips", data);
    return response.trip;
  },

  async getTrips(): Promise<Trip[]> {
    const response = await apiClient.get<{ trips: Trip[] }>("/api/trips");
    // Ensure we always return an array, even if trips is undefined or null
    return Array.isArray(response.trips) ? response.trips : [];
  },

  async getTripById(id: string): Promise<Trip> {
    const response = await apiClient.get<{ trip: Trip }>(`/api/trips/${id}`);
    return response.trip;
  },

  async deleteTrip(id: string): Promise<void> {
    await apiClient.delete(`/api/trips/${id}`);
  },
};

