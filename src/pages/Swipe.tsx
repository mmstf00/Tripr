import { SwipeCard } from "@/components/SwipeCard";
import { Button } from "@/components/ui/button";
import { destinations } from "@/data/destinations";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Swipe = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedDestinations, setLikedDestinations] = useState<string[]>([]);

  const handleSwipe = (liked: boolean) => {
    const currentDestination = destinations[currentIndex];

    if (liked) {
      setLikedDestinations((prev) => [...prev, currentDestination.id]);
    }

    if (currentIndex < destinations.length - 1) {
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 300);
    } else {
      setTimeout(() => {
        navigate("/results", { state: { likedDestinations } });
      }, 300);
    }
  };

  const progress = ((currentIndex + 1) / destinations.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 flex flex-col overflow-hidden">
      {/* Header with progress */}
      <div className="p-6">
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-muted-foreground">
              {currentIndex + 1} of {destinations.length}
            </span>
            {likedDestinations.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  navigate("/results", { state: { likedDestinations } })
                }
              >
                See Results
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
        {destinations.map((destination, index) => (
          <SwipeCard
            key={destination.id}
            destination={destination}
            onSwipe={handleSwipe}
            isActive={index === currentIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default Swipe;
