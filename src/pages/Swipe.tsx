import { SwipeCard } from "@/components/SwipeCard";
import { Button } from "@/components/ui/button";
import { countries } from "@/data/countries";
import { Country, Place } from "@/types/countries";
import { ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

type SwipeLocationState = {
  country?: Country;
  cityIds?: string[];
};

interface SwipeItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  countryLabel: string;
  city: Place;
}

const Swipe = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { countryId } = useParams();

  const locationState = (location.state ?? {}) as SwipeLocationState;

  const [selectedCountry, setSelectedCountry] = useState<Country | null>(
    locationState.country || null
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedItems, setLikedItems] = useState<SwipeItem[]>([]);

  // Ensure we always have a selected country
  useEffect(() => {
    if (!selectedCountry && countryId) {
      const country = countries.find((c) => c.id === countryId);
      if (country) {
        setSelectedCountry(country);
      } else {
        navigate("/country-select");
      }
    } else if (!selectedCountry && !countryId) {
      navigate("/country-select");
    }
  }, [countryId, selectedCountry, navigate]);

  // Prevent edge swipe browser navigation (original behavior)
  useEffect(() => {
    const preventEdgeSwipe = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (!touch) {
        return;
      }

      if (touch.clientX < 50 || touch.clientX > window.innerWidth - 50) {
        e.preventDefault();
      }
    };

    document.addEventListener("touchstart", preventEdgeSwipe, {
      passive: false,
    });
    document.addEventListener("touchmove", preventEdgeSwipe, {
      passive: false,
    });

    return () => {
      document.removeEventListener("touchstart", preventEdgeSwipe);
      document.removeEventListener("touchmove", preventEdgeSwipe);
    };
  }, []);

  const cityFilter = locationState.cityIds;

  useEffect(() => {
    setCurrentIndex(0);
    setLikedItems([]);
  }, [selectedCountry, cityFilter]);

  const selectedCities = useMemo(() => {
    const allPlaces = selectedCountry?.places ?? [];
    if (cityFilter && cityFilter.length > 0) {
      return allPlaces.filter((place) => cityFilter.includes(place.id));
    }
    return allPlaces;
  }, [selectedCountry, cityFilter]);

  const swipeItems: SwipeItem[] = useMemo(() => {
    if (!selectedCountry) {
      return [];
    }

    return selectedCities.flatMap((city) => {
      if (city.highlights && city.highlights.length > 0) {
        return city.highlights.map((highlight, index) => ({
          id: `${city.id}-highlight-${index}`,
          title: highlight.name,
          description: `Unmissable spot in ${city.name}, ${selectedCountry.name}.`,
          image: highlight.image,
          tags: city.tags,
          countryLabel: `${city.name}, ${selectedCountry.name}`,
          city,
        }));
      }

      return [
        {
          id: city.id,
          title: city.name,
          description: city.description,
          image: city.image,
          tags: city.tags,
          countryLabel: `${city.name}, ${selectedCountry.name}`,
          city,
        },
      ];
    });
  }, [selectedCountry, selectedCities]);

  if (!selectedCountry) {
    return null;
  }

  if (swipeItems.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <h2 className="text-3xl font-bold mb-4">
            No popular places available for your selection
          </h2>
          <p className="text-muted-foreground mb-8">
            Try choosing different cities in {selectedCountry.name} or switch to
            another destination.
          </p>
          <div className="flex flex-col gap-3">
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                navigate(`/city-select/${selectedCountry.id}`, {
                  state: { country: selectedCountry },
                })
              }
            >
              Choose Cities Again
            </Button>
            <Button size="lg" onClick={() => navigate("/country-select")}>
              Choose Another Country
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const progress = ((currentIndex + 1) / swipeItems.length) * 100;

  const handleSwipe = (liked: boolean) => {
    const currentItem = swipeItems[currentIndex];
    if (!currentItem) {
      return;
    }

    if (liked) {
      setLikedItems((prev) => {
        if (prev.some((item) => item.id === currentItem.id)) {
          return prev;
        }
        return [...prev, currentItem];
      });
    }

    if (currentIndex < swipeItems.length - 1) {
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 300);
    } else {
      const finalLikedItems = liked ? [...likedItems, currentItem] : likedItems;
      setTimeout(() => {
        navigate("/route-results", {
          state: {
            country: selectedCountry,
            likedItems: finalLikedItems,
          },
        });
      }, 300);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 flex flex-col overflow-hidden">
      {/* Header with progress */}
      <div className="p-6">
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-muted-foreground">
              {currentIndex + 1} of {swipeItems.length} experiences in{" "}
              {selectedCountry.name}
            </span>
            {likedItems.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  navigate("/route-results", {
                    state: {
                      country: selectedCountry,
                      likedItems,
                    },
                  })
                }
              >
                See Route
                <ArrowRight className="ml-1 w-4 h-4" />
              </Button>
            )}
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-hero transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Cards Container */}
      <div className="flex-1 relative max-w-md mx-auto w-full px-6 pb-32">
        {swipeItems.map((item, index) => (
          <SwipeCard
            key={item.id}
            destination={{
              id: item.id,
              name: item.title,
              description: item.description,
              image: item.image,
              tags: item.tags,
              country: item.countryLabel,
            }}
            onSwipe={handleSwipe}
            isActive={index === currentIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default Swipe;
