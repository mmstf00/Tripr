import heroImage from "@/assets/hero-travel.jpg";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/interactive/button";
import { Heart, MapPin, Plane } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Travel destinations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
            Swipe Your Way to
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Your Next Adventure
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Discover destinations that match your travel style. Swipe, explore,
            and let us plan your perfect journey.
          </p>
          <Button
            size="lg"
            variant="hero"
            onClick={() => navigate("/onboarding")}
            className="text-lg px-12 py-6 h-auto"
          >
            Start Exploring
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center animate-fade-in">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-sunset flex items-center justify-center shadow-[var(--shadow-card)]">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Swipe & Like</h3>
              <p className="text-muted-foreground text-lg">
                Browse through stunning destinations. Swipe right on places you
                love, left on ones you don't.
              </p>
            </div>

            <div
              className="text-center animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-ocean flex items-center justify-center shadow-[var(--shadow-card)]">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Get Insights</h3>
              <p className="text-muted-foreground text-lg">
                See your travel personality and discover patterns in your
                preferences.
              </p>
            </div>

            <div
              className="text-center animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-adventure flex items-center justify-center shadow-[var(--shadow-card)]">
                <Plane className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Plan Your Trip</h3>
              <p className="text-muted-foreground text-lg">
                Get a personalized itinerary with suggested routes and travel
                tips.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
