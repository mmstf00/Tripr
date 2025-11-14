import { Place, RouteMetrics } from '@/types/countries';

// Haversine formula to calculate distance between coordinates
export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Radius of the Earth in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
    Math.cos((lat2 * Math.PI) / 180) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Simple nearest neighbor algorithm for route optimization
export function optimizeRoute(places: Place[]): Place[] {
  if (places.length <= 1) return places;

  const optimized: Place[] = [places[0]];
  const remaining = [...places.slice(1)];

  while (remaining.length > 0) {
    const current = optimized[optimized.length - 1];
    let nearestIndex = 0;
    let minDistance = Infinity;

    remaining.forEach((place, index) => {
      const distance = calculateDistance(
        current.coordinates.lat,
        current.coordinates.lng,
        place.coordinates.lat,
        place.coordinates.lng
      );
      if (distance < minDistance) {
        minDistance = distance;
        nearestIndex = index;
      }
    });

    optimized.push(remaining[nearestIndex]);
    remaining.splice(nearestIndex, 1);
  }

  return optimized;
}

// Calculate total route metrics
export function calculateRouteMetrics(places: Place[]): RouteMetrics {
  let totalDistance = 0;
  let totalDuration = 0;

  for (let i = 0; i < places.length - 1; i++) {
    const distance = calculateDistance(
      places[i].coordinates.lat,
      places[i].coordinates.lng,
      places[i + 1].coordinates.lat,
      places[i + 1].coordinates.lng
    );
    totalDistance += distance;
    // Estimate 1 hour per 50km travel time
    totalDuration += distance / 50 + places[i].estimatedDuration;
  }
  totalDuration += places[places.length - 1].estimatedDuration;

  // Estimate cost: $50/day base + $20 per 100km travel
  const estimatedCost =
    Math.ceil(totalDuration / 8) * 50 + (totalDistance / 100) * 20;

  return {
    distance: Math.round(totalDistance),
    duration: Math.round(totalDuration),
    days: Math.ceil(totalDuration / 8),
    cost: Math.round(estimatedCost),
  };
}