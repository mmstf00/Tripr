import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { countries } from "@/data/countries";
import { Country } from "@/types/countries";
import { useNavigate } from "react-router-dom";

const CountrySelect = () => {
  const navigate = useNavigate();

  const handleCountrySelect = (country: Country) => {
    navigate(`/city-select/${country.id}`, { state: { country } });
  };

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

        <div className="grid md:grid-cols-2 gap-6">
          {countries.map((country) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountrySelect;
