import { cn } from "@/lib/utils";
import { Heart, X } from "lucide-react";
import { useState } from "react";

interface SwipeDestination {
  id: string;
  name: string;
  country: string;
  description: string;
  image: string;
  tags: string[];
}

interface SwipeCardProps {
  destination: SwipeDestination;
  onSwipe: (liked: boolean) => void;
  isActive: boolean;
}

export const SwipeCard = ({
  destination,
  onSwipe,
  isActive,
}: SwipeCardProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [dragY, setDragY] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    e.preventDefault();
    e.stopPropagation();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    e.stopPropagation();
    const touch = e.touches[0];
    setDragX(touch.clientX - window.innerWidth / 2);
    setDragY(touch.clientY - window.innerHeight / 2);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsDragging(false);
    e.preventDefault();
    e.stopPropagation();
    if (Math.abs(dragX) > 100) {
      onSwipe(dragX > 0);
    } else {
      setDragX(0);
      setDragY(0);
    }
  };

  const rotation = dragX / 20;
  const opacity = 1 - Math.abs(dragX) / 300;

  const getImageSrc = (imagePath: string) => {
    if (imagePath.startsWith("http")) {
      return imagePath;
    }

    return new URL(`../assets/destinations/${imagePath}.jpg`, import.meta.url)
      .href;
  };

  return (
    <div
      className={cn(
        "absolute left-0 right-0 top-0 w-full",
        "h-[calc(100%-80px)]",
        isActive ? "z-20" : "z-10 scale-95 opacity-0",
        !isDragging && "transition-all duration-500 ease-out"
      )}
      style={{
        transform: `translateX(${dragX}px) translateY(${
          dragY * 0.1
        }px) rotate(${rotation}deg)`,
        opacity: isActive ? opacity : 0,
        touchAction: "none",
        willChange: isDragging ? "transform" : "auto",
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-[var(--shadow-elevated)]">
        <img
          src={getImageSrc(destination.image)}
          alt={destination.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Like/Dislike indicators */}
        {dragX > 50 && (
          <div className="absolute top-8 right-8 rotate-12 border-4 border-accent text-accent px-6 py-3 rounded-xl text-2xl font-bold">
            LIKE
          </div>
        )}
        {dragX < -50 && (
          <div className="absolute top-8 left-8 -rotate-12 border-4 border-destructive text-destructive px-6 py-3 rounded-xl text-2xl font-bold">
            SKIP
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h2 className="text-4xl font-bold mb-2">{destination.name}</h2>
          <p className="text-xl mb-3 opacity-90">{destination.country}</p>
          <p className="text-base opacity-80 mb-4">{destination.description}</p>

          <div className="flex gap-2 flex-wrap">
            {destination.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-6 z-30">
        <button
          onClick={() => onSwipe(false)}
          className="w-14 h-14 rounded-full bg-white shadow-[var(--shadow-card)] flex items-center justify-center hover:scale-110 transition-transform"
        >
          <X className="w-7 h-7 text-destructive" />
        </button>
        <button
          onClick={() => onSwipe(true)}
          className="w-14 h-14 rounded-full bg-white shadow-[var(--shadow-card)] flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Heart className="w-7 h-7 text-accent" />
        </button>
      </div>
    </div>
  );
};
