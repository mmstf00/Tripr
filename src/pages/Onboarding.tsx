import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const tripTypes = [
  { id: "adventure", label: "Adventure", emoji: "🏔️" },
  { id: "relax", label: "Relax", emoji: "🏖️" },
  { id: "culture", label: "Culture", emoji: "🏛️" },
  { id: "nature", label: "Nature", emoji: "🌿" },
  { id: "city", label: "City", emoji: "🏙️" },
  { id: "romantic", label: "Romantic", emoji: "💕" },
];

const Onboarding = () => {
  const navigate = useNavigate();
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const toggleType = (id: string) => {
    setSelectedTypes((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    if (selectedTypes.length > 0) {
      navigate("/country-select");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-2xl animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">What's Your Vibe?</h1>
          <p className="text-xl text-muted-foreground">
            Select the travel styles that excite you most
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {tripTypes.map((type) => (
            <Card
              key={type.id}
              onClick={() => toggleType(type.id)}
              className={`p-8 cursor-pointer transition-all hover:scale-105 ${
                selectedTypes.includes(type.id)
                  ? "bg-primary text-primary-foreground shadow-[var(--shadow-card)] border-primary"
                  : "hover:border-primary/50"
              }`}
            >
              <div className="text-center">
                <div className="text-5xl mb-3">{type.emoji}</div>
                <div className="text-lg font-semibold">{type.label}</div>
              </div>
            </Card>
          ))}
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
  );
};

export default Onboarding;
