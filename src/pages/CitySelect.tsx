import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/data/badge";
import { Button } from "@/components/ui/interactive/button";
import { Card, CardContent } from "@/components/ui/data/card";
import { Input } from "@/components/ui/form/input";
import { countries } from "@/data/countries";
import { Country } from "@/types/countries";
import { Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const CitySelect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { countryId } = useParams();

  const [country, setCountry] = useState<Country | null>(
    location.state?.country || null
  );
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const selectedPreferences = useMemo(
    () => (location.state?.selectedPreferences || []) as string[],
    [location.state?.selectedPreferences]
  );

  useEffect(() => {
    if (!country && countryId) {
      const target = countries.find((c) => c.id === countryId);
      if (target) {
        setCountry(target);
      } else {
        navigate("/country-select");
      }
    } else if (!country && !countryId) {
      navigate("/country-select");
    }
  }, [country, countryId, navigate]);

  const cityCards = useMemo(() => {
    if (!country) {
      return [];
    }

    let places = country.places;

    // Filter by selected preferences if any
    if (selectedPreferences.length > 0) {
      places = places.filter((place) =>
        place.tags.some((tag) => selectedPreferences.includes(tag))
      );
    }

    return places.map((place) => ({
      id: place.id,
      name: place.name,
      description: place.description,
      tags: place.tags,
      image: place.image,
    }));
  }, [country, selectedPreferences]);

  const filteredCityCards = useMemo(() => {
    if (!searchQuery.trim()) {
      // Show only top 5 cities when no search query
      return cityCards.slice(0, 5);
    }
    const query = searchQuery.toLowerCase();
    // Show all filtered results when searching
    return cityCards.filter(
      (city) =>
        city.name.toLowerCase().includes(query) ||
        city.description.toLowerCase().includes(query) ||
        city.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  }, [cityCards, searchQuery]);

  if (!country) {
    return null;
  }

  const toggleCity = (cityId: string) => {
    setSelectedCities((prev) =>
      prev.includes(cityId)
        ? prev.filter((id) => id !== cityId)
        : [...prev, cityId]
    );
  };

  const handleSelectAll = () => {
    setSelectedCities(filteredCityCards.map((city) => city.id));
  };

  const handleContinue = () => {
    if (selectedCities.length === 0) return;

    navigate(`/swipe/${country.id}`, {
      state: {
        country,
        cityIds: selectedCities,
        selectedPreferences,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/10 to-background">
      <Header />
      <div className="p-6 pt-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 animate-fade-in">
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-3">
              Step 2 · Cities
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Where in {country.name} are you headed?
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pick one or multiple cities to see their most loved experiences.
              We'll tailor the swipe deck to your picks.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search cities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {filteredCityCards.length > 0 ? (
              filteredCityCards.map((city, index) => {
                const isSelected = selectedCities.includes(city.id);
                return (
                  <Card
                    key={city.id}
                    className={`overflow-hidden cursor-pointer group transition-all hover:shadow-[var(--shadow-elevated)] ${
                      isSelected
                        ? "border-primary shadow-[var(--shadow-card)]"
                        : ""
                    }`}
                    onClick={() => toggleCity(city.id)}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="relative h-48">
                      <img
                        src={city.image}
                        alt={city.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <div
                          className={`px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${
                            isSelected
                              ? "bg-white text-primary"
                              : "bg-black/40 text-white"
                          }`}
                        >
                          {isSelected ? "Selected" : "Tap to choose"}
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h2 className="text-2xl font-bold">{city.name}</h2>
                        <p className="text-sm opacity-80">{city.description}</p>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex gap-2 flex-wrap">
                        {city.tags.slice(0, 4).map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="capitalize"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })
            ) : (
              <div className="col-span-full text-center py-12 text-muted-foreground">
                <p className="text-lg">
                  No cities found matching "{searchQuery}"
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 justify-between mt-10">
            <Button variant="ghost" onClick={handleSelectAll}>
              Select All Cities
            </Button>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate("/country-select")}
              >
                Change Country
              </Button>
              <Button
                size="lg"
                className="px-10"
                disabled={selectedCities.length === 0}
                onClick={handleContinue}
              >
                Continue to Swipe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitySelect;
