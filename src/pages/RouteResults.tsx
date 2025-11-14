import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Country, RouteMetrics } from "@/types/countries";
import {
  calculateDistance,
  calculateRouteMetrics,
  optimizeRoute,
} from "@/utils/routeOptimization";
import {
  ArrowRight,
  Clock,
  DollarSign,
  MapPin,
  Navigation,
  RefreshCw,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface SwipeItem {
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
}

const RouteResults = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [country, setCountry] = useState<Country | null>(
    location.state?.country || null
  );
  const [likedItems, setLikedItems] = useState<SwipeItem[]>(
    location.state?.likedItems || []
  );
  const [optimizedRoute, setOptimizedRoute] = useState<SwipeItem[]>([]);
  const [routeMetrics, setRouteMetrics] = useState<RouteMetrics | null>(null);

  useEffect(() => {
    if (!country || likedItems.length === 0) {
      navigate("/country-select");
      return;
    }

    // Convert SwipeItems to Places for route optimization
    const placesForOptimization = likedItems.map((item) => ({
      id: item.id,
      name: item.city.name,
      description: item.description,
      image: item.image,
      tags: item.tags,
      coordinates: item.city.coordinates,
      estimatedDuration: item.city.estimatedDuration,
    }));

    const optimized = optimizeRoute(placesForOptimization);

    // Map optimized places back to SwipeItems
    const optimizedItems = optimized.map((place) => {
      const originalItem = likedItems.find(
        (item) => item.id === place.id || item.city.id === place.id
      );
      return (
        originalItem || {
          id: place.id,
          title: place.name,
          description: place.description,
          image: place.image,
          tags: place.tags,
          countryLabel: `${place.name}, ${country.name}`,
          city: {
            id: place.id,
            name: place.name,
            coordinates: place.coordinates,
            estimatedDuration: place.estimatedDuration,
          },
        }
      );
    });

    const metrics = calculateRouteMetrics(optimized);
    setOptimizedRoute(optimizedItems);
    setRouteMetrics(metrics);
  }, [country, likedItems, navigate]);

  if (!country || !routeMetrics || optimizedRoute.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="text-center max-w-md animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">No places selected</h2>
          <p className="text-muted-foreground mb-8">
            Let's try again and find some places you'll love!
          </p>
          <Button onClick={() => navigate("/country-select")} size="lg">
            Start Over
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-hero py-16 px-6">
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
          <Sparkles className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Your {country.name} Route</h1>
          <p className="text-xl opacity-90">
            We've created the perfect itinerary based on your preferences
          </p>
        </div>
      </section>

      {/* Route Metrics */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Card className="animate-fade-in">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-primary" />
                  <div>
                    <div className="text-2xl font-bold">
                      {optimizedRoute.length}
                    </div>
                    <div className="text-sm text-muted-foreground">Places</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <Navigation className="w-8 h-8 text-secondary" />
                  <div>
                    <div className="text-2xl font-bold">
                      {routeMetrics.distance} km
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Total Distance
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8 text-accent" />
                  <div>
                    <div className="text-2xl font-bold">
                      {routeMetrics.days} days
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Duration
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <DollarSign className="w-8 h-8 text-primary" />
                  <div>
                    <div className="text-2xl font-bold">
                      ${routeMetrics.cost}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Est. Cost
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Route Steps */}
          <Card className="mb-8 animate-fade-in">
            <CardHeader>
              <CardTitle>Your Optimized Itinerary</CardTitle>
              <CardDescription>
                Route optimized for minimal travel time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {optimizedRoute.map((item, index) => (
                  <div key={item.id}>
                    <div className="flex gap-3 sm:gap-4 items-start">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-48 sm:w-24 sm:h-24 object-cover rounded-lg shadow-[var(--shadow-card)] flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg sm:text-xl font-bold mb-1 break-words">
                              {item.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-muted-foreground mb-1">
                              {item.city.name}
                            </p>
                            <p className="text-sm sm:text-base text-muted-foreground mb-2 break-words">
                              {item.description}
                            </p>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                                {item.city.estimatedDuration}h
                              </span>
                              <div className="flex gap-1 flex-wrap">
                                {item.tags.slice(0, 3).map((tag) => (
                                  <Badge
                                    key={tag}
                                    variant="outline"
                                    className="text-xs capitalize"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {index < optimizedRoute.length - 1 && (
                      <div className="ml-5 sm:ml-6 my-2 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                        <div className="w-0.5 h-6 sm:h-8 bg-border" />
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span className="break-words">
                          {Math.round(
                            calculateDistance(
                              item.city.coordinates.lat,
                              item.city.coordinates.lng,
                              optimizedRoute[index + 1].city.coordinates.lat,
                              optimizedRoute[index + 1].city.coordinates.lng
                            )
                          )}{" "}
                          km • ~
                          {Math.round(
                            calculateDistance(
                              item.city.coordinates.lat,
                              item.city.coordinates.lng,
                              optimizedRoute[index + 1].city.coordinates.lat,
                              optimizedRoute[index + 1].city.coordinates.lng
                            ) / 50
                          )}{" "}
                          hour travel
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/country-select")}
              className="px-8"
            >
              <RefreshCw className="mr-2 w-5 h-5" />
              Plan Another Trip
            </Button>
            <Button size="lg" variant="hero" className="px-8">
              Export Itinerary
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RouteResults;
