import { Country } from '@/types/countries';

export const countries: Country[] = [
  {
    id: 'greece',
    name: 'Greece',
    code: 'GR',
    description: 'Ancient history, stunning islands, and Mediterranean charm',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800',
    places: [
      {
        id: 'santorini',
        name: 'Santorini',
        description: 'Iconic white buildings with blue domes overlooking the Aegean Sea',
        image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800',
        tags: ['romantic', 'beach', 'culture', 'photography'],
        highlights: [
          { name: 'Oia Village', image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800', coordinates: { lat: 36.3932, lng: 25.4615 } },
          { name: 'Fira Cliffs', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 36.3932, lng: 25.4615 } },
          { name: 'Ammoudi Bay', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 36.3932, lng: 25.4615 } }
        ],
        coordinates: { lat: 36.3932, lng: 25.4615 },
        estimatedDuration: 8,
      },
      {
        id: 'athens',
        name: 'Athens',
        description: 'Ancient ruins and vibrant modern culture',
        image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800',
        tags: ['culture', 'history', 'city', 'food'],
        highlights: [
          { name: 'Acropolis', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 37.9838, lng: 23.7275 } },
          { name: 'Plaka', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 37.9838, lng: 23.7275 } },
          { name: 'Temple of Olympian Zeus', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800', coordinates: { lat: 37.9838, lng: 23.7275 } }
        ],
        coordinates: { lat: 37.9838, lng: 23.7275 },
        estimatedDuration: 12,
      },
      {
        id: 'mykonos',
        name: 'Mykonos',
        description: 'Party island with beautiful beaches and nightlife',
        image: 'https://images.unsplash.com/photo-1601581987809-a874a81309c9?w=800',
        tags: ['beach', 'nightlife', 'party', 'romantic'],
        highlights: [
          { name: 'Little Venice', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 37.4467, lng: 25.3289 } },
          { name: 'Paradise Beach', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800', coordinates: { lat: 37.4467, lng: 25.3289 } },
          { name: 'Windmills of Kato Mili', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 37.4467, lng: 25.3289 } }
        ],
        coordinates: { lat: 37.4467, lng: 25.3289 },
        estimatedDuration: 6,
      },
      {
        id: 'crete',
        name: 'Crete',
        description: 'Largest Greek island with diverse landscapes',
        image: 'https://images.unsplash.com/photo-1580837119756-563d608dd119?w=800',
        tags: ['nature', 'beach', 'adventure', 'culture'],
        highlights: [
          { name: 'Elafonissi Beach', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800', coordinates: { lat: 35.2401, lng: 24.8093 } },
          { name: 'Heraklion Palace', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800', coordinates: { lat: 35.2401, lng: 24.8093 } },
          { name: 'Samaria Gorge', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', coordinates: { lat: 35.291341, lng: 23.958537 } }
        ],
        coordinates: { lat: 35.2401, lng: 24.8093 },
        estimatedDuration: 10,
      },
    ],
  },
  {
    id: 'france',
    name: 'France',
    code: 'FR',
    description: 'Romance, art, and exquisite cuisine',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
    places: [
      {
        id: 'paris',
        name: 'Paris',
        description: 'The City of Light with iconic landmarks and romantic ambiance',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
        tags: ['city', 'romantic', 'culture', 'food'],
        highlights: [
          { name: 'Eiffel Tower', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 48.85826, lng: 2.294501 } },
          { name: 'Louvre Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800', coordinates: { lat: 48.861147, lng: 2.338028 } },
          { name: 'Montmartre', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 48.885462, lng: 2.339154 } }
        ],
        coordinates: { lat: 48.8566, lng: 2.3522 },
        estimatedDuration: 16,
      },
      {
        id: 'nice',
        name: 'Nice',
        description: 'Mediterranean beauty on the French Riviera',
        image: 'https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=800',
        tags: ['beach', 'romantic', 'relax', 'food'],
        highlights: [
          { name: 'Promenade des Anglais', image: 'https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=800', coordinates: { lat: 43.685989, lng: 7.237476 } },
          { name: 'Castle Hill', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', coordinates: { lat: 43.7102, lng: 7.262 } },
          { name: 'Cours Saleya Market', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800', coordinates: { lat: 43.7102, lng: 7.262 } }
        ],
        coordinates: { lat: 43.7102, lng: 7.262 },
        estimatedDuration: 8,
      },
      {
        id: 'lyon',
        name: 'Lyon',
        description: 'Gastronomic capital with Renaissance architecture',
        image: 'https://images.unsplash.com/photo-1524396309943-e03f5249f002?w=800',
        tags: ['city', 'food', 'culture', 'history'],
        highlights: [
          { name: 'Old Lyon', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 45.76486, lng: 4.876318 } },
          { name: 'Basilica of Notre-Dame de Fourvière', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 45.764, lng: 4.8357 } },
          { name: 'Les Halles Market', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800', coordinates: { lat: 45.764, lng: 4.8357 } }
        ],
        coordinates: { lat: 45.764, lng: 4.8357 },
        estimatedDuration: 10,
      },
    ],
  },
  {
    id: 'italy',
    name: 'Italy',
    code: 'IT',
    description: 'Art, history, and world-class cuisine',
    image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800',
    places: [
      {
        id: 'rome',
        name: 'Rome',
        description: 'Eternal city with ancient ruins and Renaissance art',
        image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800',
        tags: ['culture', 'history', 'city', 'food'],
        highlights: [
          { name: 'Colosseum', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 41.890942, lng: 12.491903 } },
          { name: 'Vatican City', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 41.9028, lng: 12.4964 } },
          { name: 'Trevi Fountain', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 41.900978, lng: 12.483285 } },
          { name: 'Pantheon', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 41.898616, lng: 12.476833 } }
        ],
        coordinates: { lat: 41.9028, lng: 12.4964 },
        estimatedDuration: 20,
      },
      {
        id: 'venice',
        name: 'Venice',
        description: 'Romantic canals and stunning architecture',
        image: 'https://images.unsplash.com/photo-1514890547357-a9ee192728217?w=800',
        tags: ['romantic', 'culture', 'photography', 'city'],
        highlights: [
          { name: 'St. Mark\'s Square', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', coordinates: { lat: 45.434257, lng: 12.338672 } },
          { name: 'Grand Canal', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 45.437773, lng: 12.33559 } },
          { name: 'Rialto Bridge', image: 'https://images.unsplash.com/photo-1514890547357-a9ee192728217?w=800', coordinates: { lat: 45.438051, lng: 12.335935 } },
          { name: 'Doge\'s Palace', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800', coordinates: { lat: 45.434211, lng: 12.340592 } }
        ],
        coordinates: { lat: 45.4408, lng: 12.3155 },
        estimatedDuration: 12,
      },
      {
        id: 'florence',
        name: 'Florence',
        description: 'Renaissance art and Tuscan charm',
        image: 'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?w=800',
        tags: ['culture', 'art', 'history', 'food'],
        highlights: [
          { name: 'Uffizi Gallery', image: 'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?w=800', coordinates: { lat: 43.7696, lng: 11.2558 } },
          { name: 'Duomo', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 43.773102, lng: 11.256574 } },
          { name: 'Ponte Vecchio', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 43.768025, lng: 11.253158 } },
          { name: 'Boboli Gardens', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', coordinates: { lat: 43.763278, lng: 11.249899 } }
        ],
        coordinates: { lat: 43.7696, lng: 11.2558 },
        estimatedDuration: 14,
      },
      {
        id: 'milan',
        name: 'Milan',
        description: 'Fashion capital with stunning Gothic architecture',
        image: 'https://images.unsplash.com/photo-1551892548-40ad5c1e0f8b?w=800',
        tags: ['city', 'fashion', 'culture', 'food'],
        highlights: [
          { name: 'Duomo di Milano', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 45.464167, lng: 9.191612 } },
          { name: 'La Scala', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 45.467604, lng: 9.189114 } },
          { name: 'Galleria Vittorio Emanuele II', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 45.46568, lng: 9.190027 } },
          { name: 'Sforza Castle', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', coordinates: { lat: 45.470301, lng: 9.178091 } }
        ],
        coordinates: { lat: 45.4642, lng: 9.1900 },
        estimatedDuration: 10,
      },
      {
        id: 'naples',
        name: 'Naples',
        description: 'Vibrant city with rich history and amazing pizza',
        image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800',
        tags: ['city', 'food', 'culture', 'history'],
        highlights: [
          { name: 'Pompeii', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 40.751737, lng: 14.490564 } },
          { name: 'Naples National Archaeological Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800', coordinates: { lat: 40.853606, lng: 14.25115 } },
          { name: 'Castel dell\'Ovo', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 40.827742, lng: 14.248029 } },
          { name: 'Spaccanapoli', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 40.848718, lng: 14.256102 } }
        ],
        coordinates: { lat: 40.8518, lng: 14.2681 },
        estimatedDuration: 10,
      },
    ],
  },
  {
    id: 'spain',
    name: 'Spain',
    code: 'ES',
    description: 'Vibrant culture, stunning architecture, and beautiful coastlines',
    image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800',
    places: [
      {
        id: 'barcelona',
        name: 'Barcelona',
        description: 'Gaudi architecture and Mediterranean beaches',
        image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800',
        tags: ['city', 'culture', 'beach', 'architecture'],
        highlights: [
          { name: 'Sagrada Familia', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 41.403505, lng: 2.174428 } },
          { name: 'Park Güell', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', coordinates: { lat: 41.414235, lng: 2.152458 } },
          { name: 'La Rambla', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 41.376951, lng: 2.176416 } },
          { name: 'Gothic Quarter', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', coordinates: { lat: 41.383395, lng: 2.176912 } }
        ],
        coordinates: { lat: 41.3851, lng: 2.1734 },
        estimatedDuration: 16,
      },
      {
        id: 'madrid',
        name: 'Madrid',
        description: 'Royal palaces, world-class museums, and vibrant nightlife',
        image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800',
        tags: ['city', 'culture', 'art', 'nightlife'],
        highlights: [
          { name: 'Prado Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800', coordinates: { lat: 40.413793, lng: -3.692041 } },
          { name: 'Royal Palace', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800', coordinates: { lat: 40.417825, lng: -3.715113 } },
          { name: 'Retiro Park', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', coordinates: { lat: 40.414946, lng: -3.683285 } },
          { name: 'Puerta del Sol', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 40.416863, lng: -3.703876 } }
        ],
        coordinates: { lat: 40.4168, lng: -3.7038 },
        estimatedDuration: 14,
      },
      {
        id: 'seville',
        name: 'Seville',
        description: 'Flamenco, orange trees, and Moorish architecture',
        image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800',
        tags: ['culture', 'romantic', 'history', 'food'],
        highlights: [
          { name: 'Alcázar of Seville', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 37.38321, lng: -5.990183 } },
          { name: 'Cathedral of Seville', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800', coordinates: { lat: 37.385915, lng: -5.993141 } },
          { name: 'Plaza de España', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 37.376974, lng: -5.98694 } },
          { name: 'Triana', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 37.383452, lng: -6.004067 } }
        ],
        coordinates: { lat: 37.3891, lng: -5.9845 },
        estimatedDuration: 10,
      },
      {
        id: 'valencia',
        name: 'Valencia',
        description: 'Futuristic architecture and beautiful beaches',
        image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800',
        tags: ['city', 'beach', 'architecture', 'food'],
        highlights: [
          { name: 'City of Arts and Sciences', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 39.4699, lng: -0.3763 } },
          { name: 'Valencia Cathedral', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800', coordinates: { lat: 39.475568, lng: -0.375113 } },
          { name: 'La Lonja', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 39.986475, lng: -0.037021 } },
          { name: 'Malvarrosa Beach', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800', coordinates: { lat: 39.479391, lng: -0.32372 } }
        ],
        coordinates: { lat: 39.4699, lng: -0.3763 },
        estimatedDuration: 10,
      },
    ],
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    code: 'GB',
    description: 'Historic landmarks, royal heritage, and diverse culture',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
    places: [
      {
        id: 'london',
        name: 'London',
        description: 'Iconic landmarks, world-class museums, and royal history',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
        tags: ['city', 'culture', 'history', 'nightlife'],
        highlights: [
          { name: 'Big Ben', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 51.500704, lng: -0.124572 } },
          { name: 'Tower Bridge', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 51.505517, lng: -0.075366 } },
          { name: 'British Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800', coordinates: { lat: 51.519312, lng: -0.126705 } },
          { name: 'Buckingham Palace', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800', coordinates: { lat: 51.500835, lng: -0.143005 } }
        ],
        coordinates: { lat: 51.5074, lng: -0.1278 },
        estimatedDuration: 20,
      },
      {
        id: 'edinburgh',
        name: 'Edinburgh',
        description: 'Medieval old town and stunning castle',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        tags: ['culture', 'history', 'romantic', 'city'],
        highlights: [
          { name: 'Edinburgh Castle', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', coordinates: { lat: 55.948687, lng: -3.200417 } },
          { name: 'Royal Mile', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 55.950122, lng: -3.187886 } },
          { name: 'Arthur\'s Seat', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 55.944081, lng: -3.161833 } },
          { name: 'Holyrood Palace', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800', coordinates: { lat: 55.952695, lng: -3.171613 } }
        ],
        coordinates: { lat: 55.9533, lng: -3.1883 },
        estimatedDuration: 12,
      },
      {
        id: 'manchester',
        name: 'Manchester',
        description: 'Industrial heritage and vibrant music scene',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
        tags: ['city', 'culture', 'nightlife', 'music'],
        highlights: [
          { name: 'Old Trafford', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 53.46311, lng: -2.291387 } },
          { name: 'Manchester Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800', coordinates: { lat: 53.466042, lng: -2.233726 } },
          { name: 'Northern Quarter', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', coordinates: { lat: 53.483544, lng: -2.235114 } },
          { name: 'Science and Industry Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800', coordinates: { lat: 53.477259, lng: -2.254701 } }
        ],
        coordinates: { lat: 53.4808, lng: -2.2426 },
        estimatedDuration: 8,
      },
      {
        id: 'birmingham',
        name: 'Birmingham',
        description: 'Canals, culture, and diverse communities',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
        tags: ['city', 'culture', 'food', 'shopping'],
        highlights: [
          { name: 'Birmingham Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800', coordinates: { lat: 52.480446, lng: -1.903318 } },
          { name: 'Cadbury World', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 52.429986, lng: -1.93223 } },
          { name: 'Birmingham Botanical Gardens', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', coordinates: { lat: 52.466007, lng: -1.929346 } },
          { name: 'Jewellery Quarter', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', coordinates: { lat: 52.487916, lng: -1.91161 } }
        ],
        coordinates: { lat: 52.4862, lng: -1.8904 },
        estimatedDuration: 8,
      },
    ],
  },
  {
    id: 'germany',
    name: 'Germany',
    code: 'DE',
    description: 'Rich history, beer culture, and stunning architecture',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800',
    places: [
      {
        id: 'berlin',
        name: 'Berlin',
        description: 'Historic capital with vibrant art and nightlife',
        image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800',
        tags: ['city', 'culture', 'history', 'nightlife'],
        highlights: [
          { name: 'Brandenburg Gate', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800', coordinates: { lat: 52.51627, lng: 13.377703 } },
          { name: 'Berlin Wall', image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800', coordinates: { lat: 52.534059, lng: 13.3894 } },
          { name: 'Reichstag', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 52.518654, lng: 13.376102 } },
          { name: 'Museum Island', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800', coordinates: { lat: 52.520033, lng: 13.397816 } }
        ],
        coordinates: { lat: 52.5200, lng: 13.4050 },
        estimatedDuration: 18,
      },
      {
        id: 'munich',
        name: 'Munich',
        description: 'Bavarian charm and Oktoberfest traditions',
        image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800',
        tags: ['culture', 'food', 'beer', 'city'],
        highlights: [
          { name: 'Marienplatz', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 48.137032, lng: 11.575925 } },
          { name: 'Neuschwanstein Castle', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', coordinates: { lat: 48.1351, lng: 11.582 } },
          { name: 'English Garden', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', coordinates: { lat: 48.164861, lng: 11.606404 } },
          { name: 'Hofbräuhaus', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 48.137633, lng: 11.579979 } }
        ],
        coordinates: { lat: 48.1351, lng: 11.5820 },
        estimatedDuration: 12,
      },
      {
        id: 'hamburg',
        name: 'Hamburg',
        description: 'Port city with maritime history and modern architecture',
        image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800',
        tags: ['city', 'culture', 'nightlife', 'architecture'],
        highlights: [
          { name: 'Elbphilharmonie', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 53.541292, lng: 9.984206 } },
          { name: 'Speicherstadt', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 53.544015, lng: 9.986979 } },
          { name: 'Miniatur Wunderland', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 53.543823, lng: 9.988945 } },
          { name: 'Reeperbahn', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 53.549638, lng: 9.957452 } }
        ],
        coordinates: { lat: 53.5511, lng: 9.9937 },
        estimatedDuration: 10,
      },
      {
        id: 'frankfurt',
        name: 'Frankfurt',
        description: 'Financial hub with impressive skyline',
        image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800',
        tags: ['city', 'business', 'culture', 'architecture'],
        highlights: [
          { name: 'Römer', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 50.110468, lng: 8.681659 } },
          { name: 'Städel Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800', coordinates: { lat: 50.103295, lng: 8.673858 } },
          { name: 'Main Tower', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 50.112542, lng: 8.672196 } },
          { name: 'Palmengarten', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 50.123671, lng: 8.65596 } }
        ],
        coordinates: { lat: 50.1109, lng: 8.6821 },
        estimatedDuration: 8,
      },
    ],
  },
  {
    id: 'portugal',
    name: 'Portugal',
    code: 'PT',
    description: 'Historic cities, beautiful coastlines, and delicious cuisine',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800',
    places: [
      {
        id: 'lisbon',
        name: 'Lisbon',
        description: 'Hilly capital with colorful tiles and Fado music',
        image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800',
        tags: ['city', 'culture', 'romantic', 'food'],
        highlights: [
          { name: 'Belém Tower', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 38.691586, lng: -9.215929 } },
          { name: 'Jerónimos Monastery', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 38.697753, lng: -9.205591 } },
          { name: 'Alfama District', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', coordinates: { lat: 38.711624, lng: -9.135465 } },
          { name: 'São Jorge Castle', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', coordinates: { lat: 38.713926, lng: -9.133483 } }
        ],
        coordinates: { lat: 38.7223, lng: -9.1393 },
        estimatedDuration: 14,
      },
      {
        id: 'porto',
        name: 'Porto',
        description: 'Historic port city famous for wine',
        image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800',
        tags: ['city', 'culture', 'food', 'romantic'],
        highlights: [
          { name: 'Livraria Lello', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 41.146832, lng: -8.614849 } },
          { name: 'Porto Cathedral', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800', coordinates: { lat: 41.142822, lng: -8.611215 } },
          { name: 'Dom Luís I Bridge', image: 'https://images.unsplash.com/photo-1514890547357-a9ee192728217?w=800', coordinates: { lat: 41.1579, lng: -8.6291 } },
          { name: 'Port Wine Cellars', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 41.1579, lng: -8.6291 } }
        ],
        coordinates: { lat: 41.1579, lng: -8.6291 },
        estimatedDuration: 10,
      },
    ],
  },
  {
    id: 'netherlands',
    name: 'Netherlands',
    code: 'NL',
    description: 'Canals, tulips, and progressive culture',
    image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800',
    places: [
      {
        id: 'amsterdam',
        name: 'Amsterdam',
        description: 'Canal-lined capital with world-class museums',
        image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800',
        tags: ['city', 'culture', 'romantic', 'nightlife'],
        highlights: [
          { name: 'Anne Frank House', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 52.375156, lng: 4.884081 } },
          { name: 'Van Gogh Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800', coordinates: { lat: 52.358367, lng: 4.88109 } },
          { name: 'Rijksmuseum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800', coordinates: { lat: 52.359843, lng: 4.88504 } },
          { name: 'Canal Cruise', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 52.378676, lng: 4.897165 } }
        ],
        coordinates: { lat: 52.3676, lng: 4.9041 },
        estimatedDuration: 16,
      },
      {
        id: 'rotterdam',
        name: 'Rotterdam',
        description: 'Modern architecture and vibrant port',
        image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800',
        tags: ['city', 'architecture', 'culture', 'modern'],
        highlights: [
          { name: 'Erasmus Bridge', image: 'https://images.unsplash.com/photo-1514890547357-a9ee192728217?w=800', coordinates: { lat: 51.909613, lng: 4.485461 } },
          { name: 'Markthal', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 51.919771, lng: 4.486259 } },
          { name: 'Cube Houses', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 51.9244, lng: 4.4777 } },
          { name: 'Euromast', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 51.905405, lng: 4.466604 } }
        ],
        coordinates: { lat: 51.9244, lng: 4.4777 },
        estimatedDuration: 8,
      },
      {
        id: 'the-hague',
        name: 'The Hague',
        description: 'Political capital with beautiful beaches',
        image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800',
        tags: ['city', 'culture', 'beach', 'politics'],
        highlights: [
          { name: 'Mauritshuis', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 52.080391, lng: 4.314309 } },
          { name: 'Peace Palace', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800', coordinates: { lat: 52.086396, lng: 4.295639 } },
          { name: 'Scheveningen Beach', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800', coordinates: { lat: 52.111864, lng: 4.281517 } },
          { name: 'Binnenhof', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 52.079333, lng: 4.312374 } }
        ],
        coordinates: { lat: 52.0705, lng: 4.3007 },
        estimatedDuration: 8,
      },
    ],
  },
  {
    id: 'belgium',
    name: 'Belgium',
    code: 'BE',
    description: 'Medieval cities, chocolate, and world-class beer',
    image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800',
    places: [
      {
        id: 'brussels',
        name: 'Brussels',
        description: 'EU capital with stunning Grand Place',
        image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800',
        tags: ['city', 'culture', 'food', 'politics'],
        highlights: [
          { name: 'Grand Place', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 50.846714, lng: 4.352515 } },
          { name: 'Atomium', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 50.888701, lng: 4.338985 } },
          { name: 'Manneken Pis', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 50.844986, lng: 4.349993 } },
          { name: 'Royal Palace', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800', coordinates: { lat: 50.841928, lng: 4.362272 } }
        ],
        coordinates: { lat: 50.8503, lng: 4.3517 },
        estimatedDuration: 12,
      },
      {
        id: 'bruges',
        name: 'Bruges',
        description: 'Medieval fairy-tale city with canals',
        image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800',
        tags: ['romantic', 'culture', 'history', 'photography'],
        highlights: [
          { name: 'Belfry of Bruges', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 51.2093, lng: 3.2247 } },
          { name: 'Markt Square', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', coordinates: { lat: 51.2093, lng: 3.2247 } },
          { name: 'Canal Cruise', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 51.2093, lng: 3.2247 } },
          { name: 'Basilica of the Holy Blood', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 51.208127, lng: 3.226703 } }
        ],
        coordinates: { lat: 51.2093, lng: 3.2247 },
        estimatedDuration: 10,
      },
      {
        id: 'antwerp',
        name: 'Antwerp',
        description: 'Diamond capital with Renaissance architecture',
        image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800',
        tags: ['city', 'culture', 'shopping', 'art'],
        highlights: [
          { name: 'Cathedral of Our Lady', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800', coordinates: { lat: 51.22029, lng: 4.401356 } },
          { name: 'Antwerp Central Station', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 51.216583, lng: 4.420076 } },
          { name: 'Diamond District', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', coordinates: { lat: 51.214427, lng: 4.417644 } },
          { name: 'Rubens House', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 51.2194, lng: 4.4025 } }
        ],
        coordinates: { lat: 51.2194, lng: 4.4025 },
        estimatedDuration: 8,
      },
    ],
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    code: 'CH',
    description: 'Alpine beauty, precision, and luxury',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    places: [
      {
        id: 'zurich',
        name: 'Zurich',
        description: 'Financial hub with beautiful lake and mountains',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        tags: ['city', 'nature', 'culture', 'luxury'],
        highlights: [
          { name: 'Lake Zurich', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 47.279096, lng: 8.597868 } },
          { name: 'Old Town', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', coordinates: { lat: 47.373697, lng: 8.543641 } },
          { name: 'Uetliberg', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 47.351869, lng: 8.487419 } },
          { name: 'Swiss National Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800', coordinates: { lat: 47.3769, lng: 8.5417 } }
        ],
        coordinates: { lat: 47.3769, lng: 8.5417 },
        estimatedDuration: 12,
      },
      {
        id: 'geneva',
        name: 'Geneva',
        description: 'International city with stunning lake views',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        tags: ['city', 'culture', 'nature', 'international'],
        highlights: [
          { name: 'Jet d\'Eau', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 46.207381, lng: 6.155889 } },
          { name: 'Old Town', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', coordinates: { lat: 46.2044, lng: 6.1432 } },
          { name: 'United Nations', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 46.214718, lng: 6.151116 } },
          { name: 'Mont Salève', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 46.2044, lng: 6.1432 } }
        ],
        coordinates: { lat: 46.2044, lng: 6.1432 },
        estimatedDuration: 10,
      },
      {
        id: 'bern',
        name: 'Bern',
        description: 'Medieval capital with UNESCO old town',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        tags: ['culture', 'history', 'romantic', 'city'],
        highlights: [
          { name: 'Old Town', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', coordinates: { lat: 46.9481, lng: 7.4474 } },
          { name: 'Bear Park', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', coordinates: { lat: 46.947682, lng: 7.459185 } },
          { name: 'Zytglogge', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 46.947947, lng: 7.447795 } },
          { name: 'Federal Palace', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800', coordinates: { lat: 46.946488, lng: 7.444332 } }
        ],
        coordinates: { lat: 46.9481, lng: 7.4474 },
        estimatedDuration: 8,
      },
    ],
  },
  {
    id: 'austria',
    name: 'Austria',
    code: 'AT',
    description: 'Imperial history, classical music, and alpine beauty',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800',
    places: [
      {
        id: 'vienna',
        name: 'Vienna',
        description: 'Imperial capital with coffee culture and classical music',
        image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800',
        tags: ['city', 'culture', 'music', 'romantic'],
        highlights: [
          { name: 'Schönbrunn Palace', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800', coordinates: { lat: 48.184989, lng: 16.311568 } },
          { name: 'St. Stephen\'s Cathedral', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800', coordinates: { lat: 48.208492, lng: 16.373127 } },
          { name: 'Hofburg Palace', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800', coordinates: { lat: 48.206329, lng: 16.365626 } },
          { name: 'Vienna State Opera', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 48.203286, lng: 16.369194 } }
        ],
        coordinates: { lat: 48.2082, lng: 16.3738 },
        estimatedDuration: 16,
      },
      {
        id: 'salzburg',
        name: 'Salzburg',
        description: 'Mozart\'s birthplace with baroque architecture',
        image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800',
        tags: ['culture', 'music', 'romantic', 'history'],
        highlights: [
          { name: 'Hohensalzburg Fortress', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', coordinates: { lat: 47.79521, lng: 13.048097 } },
          { name: 'Mozart\'s Birthplace', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 47.799943, lng: 13.043554 } },
          { name: 'Mirabell Palace', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800', coordinates: { lat: 47.8095, lng: 13.055 } },
          { name: 'Getreidegasse', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 47.800018, lng: 13.042237 } }
        ],
        coordinates: { lat: 47.8095, lng: 13.0550 },
        estimatedDuration: 10,
      },
      {
        id: 'innsbruck',
        name: 'Innsbruck',
        description: 'Alpine city with Olympic heritage',
        image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800',
        tags: ['nature', 'adventure', 'culture', 'sports'],
        highlights: [
          { name: 'Golden Roof', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 47.268568, lng: 11.393275 } },
          { name: 'Nordkette', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 47.316961, lng: 11.40554 } },
          { name: 'Bergisel Ski Jump', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 47.2692, lng: 11.4041 } },
          { name: 'Hofburg', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 47.269181, lng: 11.394709 } }
        ],
        coordinates: { lat: 47.2692, lng: 11.4041 },
        estimatedDuration: 8,
      },
    ],
  },
  {
    id: 'czech-republic',
    name: 'Czech Republic',
    code: 'CZ',
    description: 'Medieval architecture and beer culture',
    image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800',
    places: [
      {
        id: 'prague',
        name: 'Prague',
        description: 'City of a hundred spires with stunning old town',
        image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800',
        tags: ['city', 'culture', 'history', 'romantic'],
        highlights: [
          { name: 'Prague Castle', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', coordinates: { lat: 50.090811, lng: 14.400522 } },
          { name: 'Charles Bridge', image: 'https://images.unsplash.com/photo-1514890547357-a9ee192728217?w=800', coordinates: { lat: 50.086996, lng: 14.407948 } },
          { name: 'Old Town Square', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', coordinates: { lat: 50.087445, lng: 14.420971 } },
          { name: 'Astronomical Clock', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 50.08698, lng: 14.420714 } }
        ],
        coordinates: { lat: 50.0755, lng: 14.4378 },
        estimatedDuration: 14,
      },
      {
        id: 'brno',
        name: 'Brno',
        description: 'Second city with modernist architecture',
        image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800',
        tags: ['city', 'culture', 'architecture', 'food'],
        highlights: [
          { name: 'Špilberk Castle', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', coordinates: { lat: 49.194504, lng: 16.599353 } },
          { name: 'Cathedral of St. Peter and Paul', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800', coordinates: { lat: 49.1951, lng: 16.6068 } },
          { name: 'Villa Tugendhat', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 49.207169, lng: 16.616062 } },
          { name: 'Freedom Square', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', coordinates: { lat: 49.194729, lng: 16.608434 } }
        ],
        coordinates: { lat: 49.1951, lng: 16.6068 },
        estimatedDuration: 8,
      },
    ],
  },
  {
    id: 'poland',
    name: 'Poland',
    code: 'PL',
    description: 'Rich history, resilient culture, and beautiful cities',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
    places: [
      {
        id: 'warsaw',
        name: 'Warsaw',
        description: 'Rebuilt capital with mix of old and new',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
        tags: ['city', 'culture', 'history', 'food'],
        highlights: [
          { name: 'Old Town', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', coordinates: { lat: 52.249515, lng: 21.012244 } },
          { name: 'Royal Castle', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', coordinates: { lat: 52.2479, lng: 21.01528 } },
          { name: 'Warsaw Uprising Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800', coordinates: { lat: 52.2297, lng: 21.0122 } },
          { name: 'Łazienki Park', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', coordinates: { lat: 52.212621, lng: 21.03395 } }
        ],
        coordinates: { lat: 52.2297, lng: 21.0122 },
        estimatedDuration: 12,
      },
      {
        id: 'krakow',
        name: 'Krakow',
        description: 'Medieval city with stunning main square',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
        tags: ['culture', 'history', 'romantic', 'city'],
        highlights: [
          { name: 'Main Market Square', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', coordinates: { lat: 50.061349, lng: 19.93592 } },
          { name: 'Wawel Castle', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', coordinates: { lat: 50.054405, lng: 19.936022 } },
          { name: 'Auschwitz-Birkenau', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 50.0647, lng: 19.945 } },
          { name: 'Kazimierz District', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', coordinates: { lat: 50.0647, lng: 19.945 } }
        ],
        coordinates: { lat: 50.0647, lng: 19.9450 },
        estimatedDuration: 12,
      },
      {
        id: 'gdansk',
        name: 'Gdańsk',
        description: 'Baltic port city with Hanseatic heritage',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
        tags: ['city', 'culture', 'history', 'beach'],
        highlights: [
          { name: 'Long Market', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800', coordinates: { lat: 54.348333, lng: 18.653841 } },
          { name: 'Gdańsk Crane', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 54.352, lng: 18.6466 } },
          { name: 'Westerplatte', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 54.406343, lng: 18.67702 } },
          { name: 'St. Mary\'s Church', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800', coordinates: { lat: 54.349808, lng: 18.653009 } }
        ],
        coordinates: { lat: 54.3520, lng: 18.6466 },
        estimatedDuration: 8,
      },
    ],
  },
  {
    id: 'hungary',
    name: 'Hungary',
    code: 'HU',
    description: 'Thermal baths, stunning architecture, and rich cuisine',
    image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800',
    places: [
      {
        id: 'budapest',
        name: 'Budapest',
        description: 'Danube capital with thermal baths and stunning architecture',
        image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800',
        tags: ['city', 'culture', 'romantic', 'relax'],
        highlights: [
          { name: 'Parliament Building', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 47.50705, lng: 19.045918 } },
          { name: 'Buda Castle', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', coordinates: { lat: 47.495991, lng: 19.039801 } },
          { name: 'Széchenyi Thermal Bath', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 47.518435, lng: 19.082522 } },
          { name: 'Chain Bridge', image: 'https://images.unsplash.com/photo-1514890547357-a9ee192728217?w=800', coordinates: { lat: 47.498979, lng: 19.043649 } }
        ],
        coordinates: { lat: 47.4979, lng: 19.0402 },
        estimatedDuration: 14,
      },
    ],
  },
  {
    id: 'romania',
    name: 'Romania',
    code: 'RO',
    description: 'Medieval castles and Transylvanian charm',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
    places: [
      {
        id: 'bucharest',
        name: 'Bucharest',
        description: 'Paris of the East with communist-era architecture',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
        tags: ['city', 'culture', 'history', 'architecture'],
        highlights: [
          { name: 'Palace of the Parliament', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800', coordinates: { lat: 44.42751, lng: 26.087248 } },
          { name: 'Old Town', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', coordinates: { lat: 44.43151, lng: 26.1002 } },
          { name: 'Village Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800', coordinates: { lat: 44.471581, lng: 26.077914 } },
          { name: 'Herăstrău Park', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', coordinates: { lat: 44.470492, lng: 26.08189 } }
        ],
        coordinates: { lat: 44.4268, lng: 26.1025 },
        estimatedDuration: 10,
      },
      {
        id: 'cluj-napoca',
        name: 'Cluj-Napoca',
        description: 'Transylvanian cultural hub',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
        tags: ['city', 'culture', 'history', 'food'],
        highlights: [
          { name: 'St. Michael\'s Church', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800', coordinates: { lat: 46.7712, lng: 23.6236 } },
          { name: 'Central Park', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', coordinates: { lat: 46.769859, lng: 23.576958 } },
          { name: 'Ethnographic Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800', coordinates: { lat: 46.769224, lng: 23.58661 } },
          { name: 'Botanical Garden', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', coordinates: { lat: 46.760299, lng: 23.587004 } }
        ],
        coordinates: { lat: 46.7712, lng: 23.6236 },
        estimatedDuration: 8,
      },
    ],
  },
  {
    id: 'bulgaria',
    name: 'Bulgaria',
    code: 'BG',
    description: 'Black Sea coast and ancient history',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
    places: [
      {
        id: 'sofia',
        name: 'Sofia',
        description: 'Capital with mix of Byzantine and communist architecture',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
        tags: ['city', 'culture', 'history', 'architecture'],
        highlights: [
          { name: 'Alexander Nevsky Cathedral', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800', coordinates: { lat: 42.69581, lng: 23.332786 } },
          { name: 'Boyana Church', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800', coordinates: { lat: 42.644624, lng: 23.266195 } },
          { name: 'Vitosha Mountain', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', coordinates: { lat: 42.6977, lng: 23.3219 } },
          { name: 'National Palace of Culture', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800', coordinates: { lat: 42.68476, lng: 23.318942 } }
        ],
        coordinates: { lat: 42.6977, lng: 23.3219 },
        estimatedDuration: 10,
      },
      {
        id: 'plovdiv',
        name: 'Plovdiv',
        description: 'Ancient city with Roman ruins',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
        tags: ['culture', 'history', 'romantic', 'city'],
        highlights: [
          { name: 'Old Town', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', coordinates: { lat: 42.1354, lng: 24.7453 } },
          { name: 'Roman Theatre', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 42.146976, lng: 24.751214 } },
          { name: 'Nebet Tepe', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 42.151161, lng: 24.752062 } },
          { name: 'Kapana Creative District', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', coordinates: { lat: 42.1354, lng: 24.7453 } }
        ],
        coordinates: { lat: 42.1354, lng: 24.7453 },
        estimatedDuration: 8,
      },
    ],
  },
  {
    id: 'croatia',
    name: 'Croatia',
    code: 'HR',
    description: 'Adriatic coast with stunning islands and medieval cities',
    image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800',
    places: [
      {
        id: 'zagreb',
        name: 'Zagreb',
        description: 'Capital with Austro-Hungarian architecture',
        image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800',
        tags: ['city', 'culture', 'history', 'food'],
        highlights: [
          { name: 'Upper Town', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', coordinates: { lat: 45.815, lng: 15.9819 } },
          { name: 'Cathedral of Zagreb', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800', coordinates: { lat: 45.814458, lng: 15.979855 } },
          { name: 'Mirogoj Cemetery', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 45.837848, lng: 15.985724 } },
          { name: 'Dolac Market', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800', coordinates: { lat: 45.814266, lng: 15.977334 } }
        ],
        coordinates: { lat: 45.8150, lng: 15.9819 },
        estimatedDuration: 10,
      },
      {
        id: 'dubrovnik',
        name: 'Dubrovnik',
        description: 'Pearl of the Adriatic with stunning walls',
        image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800',
        tags: ['beach', 'culture', 'history', 'romantic'],
        highlights: [
          { name: 'City Walls', image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800', coordinates: { lat: 42.641719, lng: 18.107286 } },
          { name: 'Old Town', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', coordinates: { lat: 42.641836, lng: 18.108301 } },
          { name: 'Lokrum Island', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800', coordinates: { lat: 42.627567, lng: 18.120664 } },
          { name: 'Cable Car', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 42.6507, lng: 18.0944 } }
        ],
        coordinates: { lat: 42.6507, lng: 18.0944 },
        estimatedDuration: 12,
      },
      {
        id: 'split',
        name: 'Split',
        description: 'Ancient city with Diocletian\'s Palace',
        image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800',
        tags: ['beach', 'culture', 'history', 'city'],
        highlights: [
          { name: 'Diocletian\'s Palace', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800', coordinates: { lat: 43.508505, lng: 16.440249 } },
          { name: 'Riva Promenade', image: 'https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=800', coordinates: { lat: 43.5081, lng: 16.4402 } },
          { name: 'Marjan Hill', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 43.5081, lng: 16.4402 } },
          { name: 'Bacvice Beach', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800', coordinates: { lat: 43.501937, lng: 16.445978 } }
        ],
        coordinates: { lat: 43.5081, lng: 16.4402 },
        estimatedDuration: 10,
      },
    ],
  },
  {
    id: 'serbia',
    name: 'Serbia',
    code: 'RS',
    description: 'Balkan culture and vibrant nightlife',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
    places: [
      {
        id: 'belgrade',
        name: 'Belgrade',
        description: 'Capital with fortress and vibrant nightlife',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
        tags: ['city', 'culture', 'nightlife', 'history'],
        highlights: [
          { name: 'Belgrade Fortress', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', coordinates: { lat: 44.823502, lng: 20.449765 } },
          { name: 'Knez Mihailova Street', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', coordinates: { lat: 44.7866, lng: 20.4489 } },
          { name: 'Skadarlija', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 44.818099, lng: 20.464758 } },
          { name: 'Temple of Saint Sava', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800', coordinates: { lat: 44.7866, lng: 20.4489 } }
        ],
        coordinates: { lat: 44.7866, lng: 20.4489 },
        estimatedDuration: 10,
      },
    ],
  },
  {
    id: 'slovenia',
    name: 'Slovenia',
    code: 'SI',
    description: 'Alpine beauty and charming capital',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    places: [
      {
        id: 'ljubljana',
        name: 'Ljubljana',
        description: 'Green capital with dragon bridge',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        tags: ['city', 'culture', 'romantic', 'nature'],
        highlights: [
          { name: 'Ljubljana Castle', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', coordinates: { lat: 46.048782, lng: 14.508538 } },
          { name: 'Triple Bridge', image: 'https://images.unsplash.com/photo-1514890547357-a9ee192728217?w=800', coordinates: { lat: 46.051133, lng: 14.50621 } },
          { name: 'Tivoli Park', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', coordinates: { lat: 46.055146, lng: 14.495728 } },
          { name: 'Dragon Bridge', image: 'https://images.unsplash.com/photo-1514890547357-a9ee192728217?w=800', coordinates: { lat: 46.051932, lng: 14.510414 } }
        ],
        coordinates: { lat: 46.0569, lng: 14.5058 },
        estimatedDuration: 10,
      },
    ],
  },
  {
    id: 'slovakia',
    name: 'Slovakia',
    code: 'SK',
    description: 'Castles, mountains, and charming capital',
    image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800',
    places: [
      {
        id: 'bratislava',
        name: 'Bratislava',
        description: 'Capital on the Danube with hilltop castle',
        image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800',
        tags: ['city', 'culture', 'history', 'romantic'],
        highlights: [
          { name: 'Bratislava Castle', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', coordinates: { lat: 48.142587, lng: 17.100469 } },
          { name: 'Old Town', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', coordinates: { lat: 48.140589, lng: 17.112327 } },
          { name: 'Blue Church', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800', coordinates: { lat: 48.14336, lng: 17.116741 } },
          { name: 'Slavin Memorial', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 48.233939, lng: 17.103872 } }
        ],
        coordinates: { lat: 48.1486, lng: 17.1077 },
        estimatedDuration: 8,
      },
    ],
  },
  {
    id: 'denmark',
    name: 'Denmark',
    code: 'DK',
    description: 'Hygge culture, design, and beautiful coastlines',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    places: [
      {
        id: 'copenhagen',
        name: 'Copenhagen',
        description: 'Scandinavian capital with colorful harbor',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        tags: ['city', 'culture', 'design', 'food'],
        highlights: [
          { name: 'Nyhavn', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 55.679736, lng: 12.590886 } },
          { name: 'Tivoli Gardens', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', coordinates: { lat: 55.673343, lng: 12.569042 } },
          { name: 'The Little Mermaid', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 55.692866, lng: 12.59929 } },
          { name: 'Rosenborg Castle', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', coordinates: { lat: 55.685693, lng: 12.57742 } }
        ],
        coordinates: { lat: 55.6761, lng: 12.5683 },
        estimatedDuration: 14,
      },
      {
        id: 'aarhus',
        name: 'Aarhus',
        description: 'Second city with modern art scene',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        tags: ['city', 'culture', 'art', 'food'],
        highlights: [
          { name: 'AROS Art Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800', coordinates: { lat: 56.153888, lng: 10.199605 } },
          { name: 'Old Town', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', coordinates: { lat: 56.158963, lng: 10.191522 } },
          { name: 'Moesgaard Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800', coordinates: { lat: 56.086355, lng: 10.222522 } },
          { name: 'Aarhus Cathedral', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800', coordinates: { lat: 56.156854, lng: 10.210646 } }
        ],
        coordinates: { lat: 56.1629, lng: 10.2039 },
        estimatedDuration: 8,
      },
    ],
  },
  {
    id: 'sweden',
    name: 'Sweden',
    code: 'SE',
    description: 'Scandinavian design, nature, and innovation',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    places: [
      {
        id: 'stockholm',
        name: 'Stockholm',
        description: 'Archipelago capital with stunning old town',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        tags: ['city', 'culture', 'nature', 'design'],
        highlights: [
          { name: 'Gamla Stan', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 59.323305, lng: 18.067002 } },
          { name: 'Vasa Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800', coordinates: { lat: 59.328059, lng: 18.091366 } },
          { name: 'ABBA Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800', coordinates: { lat: 59.324925, lng: 18.096583 } },
          { name: 'Djurgården', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 59.326673, lng: 18.115138 } }
        ],
        coordinates: { lat: 59.3293, lng: 18.0686 },
        estimatedDuration: 16,
      },
      {
        id: 'gothenburg',
        name: 'Gothenburg',
        description: 'Coastal city with canals and seafood',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        tags: ['city', 'culture', 'food', 'beach'],
        highlights: [
          { name: 'Liseberg', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 57.694517, lng: 11.993695 } },
          { name: 'Haga District', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', coordinates: { lat: 57.7089, lng: 11.9746 } },
          { name: 'Universeum', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 57.69555, lng: 11.989264 } },
          { name: 'Feskekôrka', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 57.701004, lng: 11.957802 } }
        ],
        coordinates: { lat: 57.7089, lng: 11.9746 },
        estimatedDuration: 10,
      },
      {
        id: 'malmo',
        name: 'Malmö',
        description: 'Modern city with Öresund Bridge',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        tags: ['city', 'culture', 'architecture', 'modern'],
        highlights: [
          { name: 'Turning Torso', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 55.613327, lng: 12.976335 } },
          { name: 'Malmö Castle', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', coordinates: { lat: 55.6059, lng: 13.0007 } },
          { name: 'Ribersborg Beach', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800', coordinates: { lat: 55.60191, lng: 12.962199 } },
          { name: 'Lilla Torg', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 55.605091, lng: 12.998774 } }
        ],
        coordinates: { lat: 55.6059, lng: 13.0007 },
        estimatedDuration: 8,
      },
    ],
  },
  {
    id: 'norway',
    name: 'Norway',
    code: 'NO',
    description: 'Fjords, northern lights, and stunning nature',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    places: [
      {
        id: 'oslo',
        name: 'Oslo',
        description: 'Capital surrounded by fjords and forests',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        tags: ['city', 'nature', 'culture', 'design'],
        highlights: [
          { name: 'Vigeland Park', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', coordinates: { lat: 59.924678, lng: 10.707739 } },
          { name: 'Viking Ship Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800', coordinates: { lat: 59.9139, lng: 10.7522 } },
          { name: 'Opera House', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 59.9139, lng: 10.7522 } },
          { name: 'Akershus Fortress', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', coordinates: { lat: 59.9139, lng: 10.7522 } }
        ],
        coordinates: { lat: 59.9139, lng: 10.7522 },
        estimatedDuration: 12,
      },
      {
        id: 'bergen',
        name: 'Bergen',
        description: 'Gateway to the fjords with colorful houses',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        tags: ['nature', 'culture', 'romantic', 'photography'],
        highlights: [
          { name: 'Bryggen', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 60.3913, lng: 5.3221 } },
          { name: 'Fløyen', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 60.3913, lng: 5.3221 } },
          { name: 'Fish Market', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800', coordinates: { lat: 60.3913, lng: 5.3221 } },
          { name: 'Fjord Tours', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 60.3913, lng: 5.3221 } }
        ],
        coordinates: { lat: 60.3913, lng: 5.3221 },
        estimatedDuration: 10,
      },
      {
        id: 'trondheim',
        name: 'Trondheim',
        description: 'Historic city with stunning cathedral',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        tags: ['culture', 'history', 'city', 'romantic'],
        highlights: [
          { name: 'Nidaros Cathedral', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800', coordinates: { lat: 63.4305, lng: 10.3951 } },
          { name: 'Old Town Bridge', image: 'https://images.unsplash.com/photo-1514890547357-a9ee192728217?w=800', coordinates: { lat: 63.4305, lng: 10.3951 } },
          { name: 'Ringve Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800', coordinates: { lat: 63.4305, lng: 10.3951 } },
          { name: 'Bakklandet', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 63.4305, lng: 10.3951 } }
        ],
        coordinates: { lat: 63.4305, lng: 10.3951 },
        estimatedDuration: 8,
      },
    ],
  },
  {
    id: 'finland',
    name: 'Finland',
    code: 'FI',
    description: 'Design, saunas, and northern beauty',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    places: [
      {
        id: 'helsinki',
        name: 'Helsinki',
        description: 'Design capital with island fortress',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        tags: ['city', 'design', 'culture', 'nature'],
        highlights: [
          { name: 'Suomenlinna', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 60.1699, lng: 24.9384 } },
          { name: 'Helsinki Cathedral', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800', coordinates: { lat: 60.1699, lng: 24.9384 } },
          { name: 'Temppeliaukio Church', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800', coordinates: { lat: 60.1699, lng: 24.9384 } },
          { name: 'Design District', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', coordinates: { lat: 60.1699, lng: 24.9384 } }
        ],
        coordinates: { lat: 60.1699, lng: 24.9384 },
        estimatedDuration: 12,
      },
      {
        id: 'tampere',
        name: 'Tampere',
        description: 'Industrial city with cultural scene',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        tags: ['city', 'culture', 'food', 'art'],
        highlights: [
          { name: 'Pyynikki Observation Tower', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 61.4978, lng: 23.761 } },
          { name: 'Tampere Cathedral', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800', coordinates: { lat: 61.4978, lng: 23.761 } },
          { name: 'Särkänniemi', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 61.4978, lng: 23.761 } },
          { name: 'Vapriikki Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800', coordinates: { lat: 61.4978, lng: 23.761 } }
        ],
        coordinates: { lat: 61.4978, lng: 23.7610 },
        estimatedDuration: 8,
      },
    ],
  },
  {
    id: 'iceland',
    name: 'Iceland',
    code: 'IS',
    description: 'Volcanic landscapes, geysers, and northern lights',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    places: [
      {
        id: 'reykjavik',
        name: 'Reykjavik',
        description: 'Northernmost capital with vibrant culture',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        tags: ['city', 'nature', 'culture', 'adventure'],
        highlights: [
          { name: 'Hallgrímskirkja', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 64.1466, lng: -21.9426 } },
          { name: 'Blue Lagoon', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800', coordinates: { lat: 64.1466, lng: -21.9426 } },
          { name: 'Golden Circle', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 64.1466, lng: -21.9426 } },
          { name: 'Northern Lights', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 64.1466, lng: -21.9426 } }
        ],
        coordinates: { lat: 64.1466, lng: -21.9426 },
        estimatedDuration: 14,
      },
    ],
  },
  {
    id: 'ireland',
    name: 'Ireland',
    code: 'IE',
    description: 'Emerald isle with friendly people and rich culture',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
    places: [
      {
        id: 'dublin',
        name: 'Dublin',
        description: 'Literary capital with vibrant pub culture',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
        tags: ['city', 'culture', 'nightlife', 'food'],
        highlights: [
          { name: 'Trinity College', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 53.3498, lng: -6.2603 } },
          { name: 'Guinness Storehouse', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 53.3498, lng: -6.2603 } },
          { name: 'Temple Bar', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800', coordinates: { lat: 53.3498, lng: -6.2603 } },
          { name: 'Dublin Castle', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', coordinates: { lat: 53.34261, lng: -6.267011 } }
        ],
        coordinates: { lat: 53.3498, lng: -6.2603 },
        estimatedDuration: 12,
      },
      {
        id: 'cork',
        name: 'Cork',
        description: 'Rebel city with food scene',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
        tags: ['city', 'food', 'culture', 'romantic'],
        highlights: [
          { name: 'English Market', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800', coordinates: { lat: 51.89774, lng: -8.474484 } },
          { name: 'Blarney Castle', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', coordinates: { lat: 51.929097, lng: -8.570885 } },
          { name: 'Cork City Gaol', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 51.89948, lng: -8.498993 } },
          { name: 'St. Fin Barre\'s Cathedral', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800', coordinates: { lat: 51.894356, lng: -8.4805 } }
        ],
        coordinates: { lat: 51.8985, lng: -8.4756 },
        estimatedDuration: 8,
      },
      {
        id: 'galway',
        name: 'Galway',
        description: 'Cultural hub with traditional music',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
        tags: ['culture', 'music', 'romantic', 'city'],
        highlights: [
          { name: 'Latin Quarter', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', coordinates: { lat: 53.2707, lng: -9.0568 } },
          { name: 'Galway Cathedral', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800', coordinates: { lat: 53.275216, lng: -9.057579 } },
          { name: 'Salthill Promenade', image: 'https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=800', coordinates: { lat: 53.258867, lng: -9.076614 } },
          { name: 'Claddagh', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', coordinates: { lat: 53.266562, lng: -9.057569 } }
        ],
        coordinates: { lat: 53.2707, lng: -9.0568 },
        estimatedDuration: 8,
      },
    ],
  },
];