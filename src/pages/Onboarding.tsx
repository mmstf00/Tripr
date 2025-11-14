import { Header } from "@/components/Header";
import { Button } from "@/components/ui/interactive/button";
import { Card } from "@/components/ui/data/card";
import { Input } from "@/components/ui/form/input";
import { ArrowRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const tripTypes = [
  { id: "adventure", label: "Adventure", emoji: "🏔️" },
  { id: "beach", label: "Beach", emoji: "🏝️" },
  { id: "culture", label: "Culture", emoji: "🏛️" },
  { id: "nature", label: "Nature", emoji: "🌿" },
  { id: "city", label: "City", emoji: "🏙️" },
  { id: "romantic", label: "Romantic", emoji: "💕" },
  { id: "food", label: "Food", emoji: "🍽️" },
  { id: "history", label: "History", emoji: "📜" },
  { id: "art", label: "Art", emoji: "🎨" },
  { id: "music", label: "Music", emoji: "🎵" },
  { id: "nightlife", label: "Nightlife", emoji: "🌃" },
  { id: "photography", label: "Photography", emoji: "📸" },
  { id: "shopping", label: "Shopping", emoji: "🛍️" },
  { id: "party", label: "Party", emoji: "🎉" },
  { id: "fashion", label: "Fashion", emoji: "👗" },
];

const Onboarding = () => {
  const navigate = useNavigate();
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleType = (id: string) => {
    setSelectedTypes((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    if (selectedTypes.length > 0) {
      navigate("/country-select", {
        state: { selectedPreferences: selectedTypes },
      });
    }
  };

  const displayedOptions = useMemo(() => {
    if (!searchQuery.trim()) {
      // Show all options by default
      return tripTypes;
    }
    // Show all filtered options when searching
    const query = searchQuery.toLowerCase();
    return tripTypes.filter((type) => type.label.toLowerCase().includes(query));
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex items-center justify-center p-6 pt-8">
        <div className="w-full max-w-6xl animate-fade-in">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-4">What's Your Vibe?</h1>
            <p className="text-xl text-muted-foreground">
              Select the travel styles that excite you most
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search options..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 mb-12">
            {displayedOptions.length > 0 ? (
              displayedOptions.map((type) => (
                <Card
                  key={type.id}
                  onClick={() => toggleType(type.id)}
                  className={`p-4 cursor-pointer transition-all hover:scale-105 ${
                    selectedTypes.includes(type.id)
                      ? "bg-primary text-primary-foreground shadow-[var(--shadow-card)] border-primary"
                      : "hover:border-primary/50"
                  }`}
                >
                  <div className="text-center">
                    <div className="text-3xl mb-2">{type.emoji}</div>
                    <div className="text-sm font-semibold">{type.label}</div>
                  </div>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-8 text-muted-foreground">
                <p className="text-lg">
                  No options found matching "{searchQuery}"
                </p>
              </div>
            )}
          </div>

          <div className="flex justify-center">
            <Button
              size="lg"
              onClick={handleContinue}
              disabled={selectedTypes.length === 0}
              className="px-12"
            >
              Continue to Destinations
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
