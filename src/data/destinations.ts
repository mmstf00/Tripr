export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  image: string;
  tags: string[];
}

export const destinations: Destination[] = [
  {
    id: "santorini",
    name: "Santorini",
    country: "Greece",
    description: "Iconic white buildings with blue domes overlooking the Aegean Sea",
    image: "santorini",
    tags: ["romantic", "beach", "culture", "photography"],
  },
  {
    id: "tokyo",
    name: "Tokyo",
    country: "Japan",
    description: "Vibrant cityscape mixing ancient temples with neon-lit streets",
    image: "tokyo",
    tags: ["city", "culture", "food", "nightlife"],
  },
  {
    id: "machu-picchu",
    name: "Machu Picchu",
    country: "Peru",
    description: "Ancient Incan citadel perched high in the Andes Mountains",
    image: "machu-picchu",
    tags: ["adventure", "culture", "nature", "hiking"],
  },
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    description: "Lush rice terraces, temples, and tropical paradise beaches",
    image: "bali",
    tags: ["nature", "beach", "relax", "culture"],
  },
  {
    id: "paris",
    name: "Paris",
    country: "France",
    description: "The City of Light with iconic landmarks and romantic ambiance",
    image: "paris",
    tags: ["city", "romantic", "culture", "food"],
  },
];
