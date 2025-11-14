import { cn } from "@/lib/utils";
import { Heart, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
  const cardRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragXRef = useRef(0);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || !isActive) return;

    const handleTouchStart = (e: TouchEvent) => {
      isDraggingRef.current = true;
      setIsDragging(true);
      const touch = e.touches[0];
      startXRef.current = touch.clientX;
      startYRef.current = touch.clientY;
      e.preventDefault();
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current) return;
      const touch = e.touches[0];
      const deltaX = touch.clientX - startXRef.current;
      const deltaY = touch.clientY - startYRef.current;
      dragXRef.current = deltaX;
      setDragX(deltaX);
      setDragY(deltaY);
      e.preventDefault();
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false;
      setIsDragging(false);
      const finalDragX = dragXRef.current;
      if (Math.abs(finalDragX) > 100) {
        onSwipe(finalDragX > 0);
      } else {
        setDragX(0);
        setDragY(0);
        dragXRef.current = 0;
      }
    };

    // Add non-passive event listeners
    card.addEventListener("touchstart", handleTouchStart, { passive: false });
    card.addEventListener("touchmove", handleTouchMove, { passive: false });
    card.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      card.removeEventListener("touchstart", handleTouchStart);
      card.removeEventListener("touchmove", handleTouchMove);
      card.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isActive, onSwipe]);

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
      ref={cardRef}
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
          <div className="absolute top-8 left-8 rotate-12 border-4 border-accent text-accent px-8 py-4 rounded-xl text-4xl font-bold">
            LIKE
          </div>
        )}
        {dragX < -50 && (
          <div className="absolute top-8 right-8 -rotate-12 border-4 border-destructive text-destructive px-8 py-4 rounded-xl text-4xl font-bold">
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
