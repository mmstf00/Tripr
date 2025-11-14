import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { countries } from "@/data/countries";
import { Country } from "@/types/countries";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CountrySelect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const selectedPreferences = useMemo(
    () => (location.state?.selectedPreferences || []) as string[],
    [location.state?.selectedPreferences]
  );

  const handleCountrySelect = (country: Country) => {
    navigate(`/city-select/${country.id}`, {
      state: { country, selectedPreferences },
    });
  };

  const filteredCountries = useMemo(() => {
    let result = countries;

    // Filter by selected preferences if any
    if (selectedPreferences.length > 0) {
      result = result.filter((country) => {
        // Check if any place in the country has matching tags
        return country.places.some((place) =>
          place.tags.some((tag) => selectedPreferences.includes(tag))
        );
      });
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (country) =>
          country.name.toLowerCase().includes(query) ||
          country.description.toLowerCase().includes(query)
      );
    } else {
      // Show only top 5 countries when no search query
      result = result.slice(0, 5);
    }

    return result;
  }, [searchQuery, selectedPreferences]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Choose Your Destination
          </h1>
          <p className="text-xl text-muted-foreground">
            Select a country to explore its best places
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search countries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country) => (
              <Card
                key={country.id}
                className="cursor-pointer hover:shadow-[var(--shadow-elevated)] transition-all hover:scale-105 overflow-hidden animate-scale-in"
                onClick={() => handleCountrySelect(country)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h2 className="text-3xl font-bold mb-1">{country.name}</h2>
                    <Badge variant="secondary" className="text-sm">
                      {country.places.length} Places
                    </Badge>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground">{country.description}</p>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              <p className="text-lg">
                No countries found matching "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountrySelect;
