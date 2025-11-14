import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Country, Place, RouteMetrics } from "@/types/countries";
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

const RouteResults = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [country, setCountry] = useState<Country | null>(
    location.state?.country || null
  );
  const [likedPlaces, setLikedPlaces] = useState<Place[]>(
    location.state?.likedPlaces || []
  );
  const [optimizedRoute, setOptimizedRoute] = useState<Place[]>([]);
  const [routeMetrics, setRouteMetrics] = useState<RouteMetrics | null>(null);

  useEffect(() => {
    if (!country || likedPlaces.length === 0) {
      navigate("/country-select");
      return;
    }

    const optimized = optimizeRoute(likedPlaces);
    const metrics = calculateRouteMetrics(optimized);
    setOptimizedRoute(optimized);
    setRouteMetrics(metrics);
  }, [country, likedPlaces, navigate]);

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

  // Analyze travel personality
  const allTags = optimizedRoute.flatMap((d) => d.tags);
  const tagCounts = allTags.reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const topPreferences = Object.entries(tagCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map(([tag]) => tag);

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

          {/* Travel Personality */}
          <Card className="p-8 mb-12 animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <MapPin className="w-6 h-6 mr-2 text-primary" />
              Your Travel Preferences
            </h2>
            <div className="flex gap-3 flex-wrap mb-6">
              {topPreferences.map((pref) => (
                <span
                  key={pref}
                  className="px-6 py-3 bg-primary/10 text-primary rounded-full text-lg font-medium capitalize"
                >
                  {pref}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground text-lg">
              You have a preference for{" "}
              <strong className="text-foreground">
                {topPreferences.join(", ")}
              </strong>{" "}
              destinations. Your ideal trip combines these elements for an
              unforgettable experience!
            </p>
          </Card>

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
                {optimizedRoute.map((place, index) => (
                  <div key={place.id}>
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start gap-4">
                          <img
                            src={place.image}
                            alt={place.name}
                            className="w-24 h-24 object-cover rounded-lg shadow-[var(--shadow-card)]"
                          />
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-1">
                              {place.name}
                            </h3>
                            <p className="text-muted-foreground mb-2">
                              {place.description}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {place.estimatedDuration}h
                              </span>
                              <div className="flex gap-1">
                                {place.tags.slice(0, 3).map((tag) => (
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
                      <div className="ml-6 my-2 flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-0.5 h-8 bg-border" />
                        <ArrowRight className="w-4 h-4" />
                        <span>
                          {Math.round(
                            calculateDistance(
                              place.coordinates.lat,
                              place.coordinates.lng,
                              optimizedRoute[index + 1].coordinates.lat,
                              optimizedRoute[index + 1].coordinates.lng
                            )
                          )}{" "}
                          km • ~
                          {Math.round(
                            calculateDistance(
                              place.coordinates.lat,
                              place.coordinates.lng,
                              optimizedRoute[index + 1].coordinates.lat,
                              optimizedRoute[index + 1].coordinates.lng
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
