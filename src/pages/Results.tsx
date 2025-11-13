import { useLocation, useNavigate } from "react-router-dom";
import { destinations } from "@/data/destinations";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Sparkles, RefreshCw } from "lucide-react";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const likedDestinations = (location.state?.likedDestinations || []) as string[];

  const likedPlaces = destinations.filter((d) =>
    likedDestinations.includes(d.id)
  );

  // Analyze travel personality
  const allTags = likedPlaces.flatMap((d) => d.tags);
  const tagCounts = allTags.reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const topPreferences = Object.entries(tagCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map(([tag]) => tag);

  const getImagePath = (imageName: string) => {
    return new URL(`../assets/destinations/${imageName}.jpg`, import.meta.url).href;
  };

  if (likedPlaces.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="text-center max-w-md animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">No destinations selected</h2>
          <p className="text-muted-foreground mb-8">
            Let's try again and find some places you'll love!
          </p>
          <Button onClick={() => navigate("/swipe")} size="lg">
            Start Swiping
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
          <h1 className="text-5xl font-bold mb-4">Your Travel Profile</h1>
          <p className="text-xl opacity-90">
            Based on your choices, here's what we discovered about your travel style
          </p>
        </div>
      </section>

      {/* Travel Personality */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
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
              <strong className="text-foreground">{topPreferences.join(", ")}</strong>{" "}
              destinations. Your ideal trip combines these elements for an unforgettable experience!
            </p>
          </Card>

          {/* Liked Destinations */}
          <h2 className="text-3xl font-bold mb-8">Your Dream Destinations</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {likedPlaces.map((destination, index) => (
              <Card
                key={destination.id}
                className="overflow-hidden animate-scale-in hover:shadow-[var(--shadow-elevated)] transition-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64">
                  <img
                    src={getImagePath(destination.image)}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{destination.name}</h3>
                    <p className="text-sm opacity-90">{destination.country}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{destination.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {destination.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary/50 rounded-full text-sm capitalize"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate("/swipe")}
              variant="outline"
              className="px-8"
            >
              <RefreshCw className="mr-2 w-5 h-5" />
              Discover More
            </Button>
            <Button
              size="lg"
              variant="hero"
              onClick={() => navigate("/")}
              className="px-8"
            >
              Start New Journey
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Results;
