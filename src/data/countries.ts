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
          { name: 'Oia Village', image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800' },
          { name: 'Fira Cliffs', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Ammoudi Bay', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' }
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
          { name: 'Acropolis', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Plaka', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Temple of Olympian Zeus', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800' }
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
          { name: 'Little Venice', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Paradise Beach', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800' },
          { name: 'Windmills of Kato Mili', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' }
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
          { name: 'Elafonissi Beach', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800' },
          { name: 'Heraklion Palace', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800' },
          { name: 'Samaria Gorge', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' }
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
          { name: 'Eiffel Tower', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Louvre Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800' },
          { name: 'Montmartre', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' }
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
          { name: 'Promenade des Anglais', image: 'https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=800' },
          { name: 'Castle Hill', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' },
          { name: 'Cours Saleya Market', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800' }
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
          { name: 'Old Lyon', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Basilica of Notre-Dame de Fourvière', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Les Halles Market', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800' }
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
          { name: 'Colosseum', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Vatican City', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Trevi Fountain', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Pantheon', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' }
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
          { name: 'St. Mark\'s Square', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800' },
          { name: 'Grand Canal', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Rialto Bridge', image: 'https://images.unsplash.com/photo-1514890547357-a9ee192728217?w=800' },
          { name: 'Doge\'s Palace', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800' }
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
          { name: 'Uffizi Gallery', image: 'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?w=800' },
          { name: 'Duomo', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Ponte Vecchio', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Boboli Gardens', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' }
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
          { name: 'Duomo di Milano', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'La Scala', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Galleria Vittorio Emanuele II', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Sforza Castle', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' }
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
          { name: 'Pompeii', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Naples National Archaeological Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800' },
          { name: 'Castel dell\'Ovo', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Spaccanapoli', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' }
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
          { name: 'Sagrada Familia', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Park Güell', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' },
          { name: 'La Rambla', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Gothic Quarter', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800' }
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
          { name: 'Prado Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800' },
          { name: 'Royal Palace', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800' },
          { name: 'Retiro Park', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' },
          { name: 'Puerta del Sol', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' }
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
          { name: 'Alcázar of Seville', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Cathedral of Seville', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800' },
          { name: 'Plaza de España', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Triana', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' }
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
          { name: 'City of Arts and Sciences', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Valencia Cathedral', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800' },
          { name: 'La Lonja', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Malvarrosa Beach', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800' }
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
          { name: 'Big Ben', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Tower Bridge', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'British Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800' },
          { name: 'Buckingham Palace', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800' }
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
          { name: 'Edinburgh Castle', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' },
          { name: 'Royal Mile', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Arthur\'s Seat', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Holyrood Palace', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800' }
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
          { name: 'Old Trafford', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Manchester Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800' },
          { name: 'Northern Quarter', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800' },
          { name: 'Science and Industry Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800' }
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
          { name: 'Birmingham Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800' },
          { name: 'Cadbury World', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Birmingham Botanical Gardens', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' },
          { name: 'Jewellery Quarter', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800' }
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
          { name: 'Brandenburg Gate', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800' },
          { name: 'Berlin Wall', image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800' },
          { name: 'Reichstag', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Museum Island', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800' }
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
          { name: 'Marienplatz', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Neuschwanstein Castle', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' },
          { name: 'English Garden', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' },
          { name: 'Hofbräuhaus', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' }
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
          { name: 'Elbphilharmonie', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Speicherstadt', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Miniatur Wunderland', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Reeperbahn', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' }
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
          { name: 'Römer', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Städel Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800' },
          { name: 'Main Tower', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Palmengarten', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' }
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
          { name: 'Belém Tower', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Jerónimos Monastery', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Alfama District', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800' },
          { name: 'São Jorge Castle', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' }
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
          { name: 'Livraria Lello', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Porto Cathedral', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800' },
          { name: 'Dom Luís I Bridge', image: 'https://images.unsplash.com/photo-1514890547357-a9ee192728217?w=800' },
          { name: 'Port Wine Cellars', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' }
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
          { name: 'Anne Frank House', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Van Gogh Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800' },
          { name: 'Rijksmuseum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800' },
          { name: 'Canal Cruise', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' }
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
          { name: 'Erasmus Bridge', image: 'https://images.unsplash.com/photo-1514890547357-a9ee192728217?w=800' },
          { name: 'Markthal', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Cube Houses', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Euromast', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' }
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
          { name: 'Mauritshuis', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Peace Palace', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800' },
          { name: 'Scheveningen Beach', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800' },
          { name: 'Binnenhof', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' }
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
          { name: 'Grand Place', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Atomium', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Manneken Pis', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Royal Palace', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800' }
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
          { name: 'Belfry of Bruges', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Markt Square', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800' },
          { name: 'Canal Cruise', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Basilica of the Holy Blood', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' }
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
          { name: 'Cathedral of Our Lady', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800' },
          { name: 'Antwerp Central Station', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Diamond District', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800' },
          { name: 'Rubens House', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' }
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
          { name: 'Lake Zurich', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Old Town', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800' },
          { name: 'Uetliberg', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Swiss National Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800' }
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
          { name: 'Jet d\'Eau', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Old Town', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800' },
          { name: 'United Nations', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Mont Salève', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' }
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
          { name: 'Old Town', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800' },
          { name: 'Bear Park', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' },
          { name: 'Zytglogge', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Federal Palace', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800' }
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
          { name: 'Schönbrunn Palace', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800' },
          { name: 'St. Stephen\'s Cathedral', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800' },
          { name: 'Hofburg Palace', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800' },
          { name: 'Vienna State Opera', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' }
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
          { name: 'Hohensalzburg Fortress', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' },
          { name: 'Mozart\'s Birthplace', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Mirabell Palace', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800' },
          { name: 'Getreidegasse', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' }
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
          { name: 'Golden Roof', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Nordkette', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Bergisel Ski Jump', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Hofburg', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' }
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
          { name: 'Prague Castle', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' },
          { name: 'Charles Bridge', image: 'https://images.unsplash.com/photo-1514890547357-a9ee192728217?w=800' },
          { name: 'Old Town Square', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800' },
          { name: 'Astronomical Clock', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' }
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
          { name: 'Špilberk Castle', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' },
          { name: 'Cathedral of St. Peter and Paul', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800' },
          { name: 'Villa Tugendhat', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Freedom Square', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800' }
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
          { name: 'Old Town', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800' },
          { name: 'Royal Castle', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' },
          { name: 'Warsaw Uprising Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800' },
          { name: 'Łazienki Park', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' }
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
          { name: 'Main Market Square', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800' },
          { name: 'Wawel Castle', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' },
          { name: 'Auschwitz-Birkenau', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Kazimierz District', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800' }
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
          { name: 'Long Market', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800' },
          { name: 'Gdańsk Crane', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Westerplatte', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'St. Mary\'s Church', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800' }
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
          { name: 'Parliament Building', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Buda Castle', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' },
          { name: 'Széchenyi Thermal Bath', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Chain Bridge', image: 'https://images.unsplash.com/photo-1514890547357-a9ee192728217?w=800' }
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
          { name: 'Palace of the Parliament', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800' },
          { name: 'Old Town', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800' },
          { name: 'Village Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800' },
          { name: 'Herăstrău Park', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' }
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
          { name: 'St. Michael\'s Church', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800' },
          { name: 'Central Park', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' },
          { name: 'Ethnographic Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800' },
          { name: 'Botanical Garden', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' }
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
          { name: 'Alexander Nevsky Cathedral', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800' },
          { name: 'Boyana Church', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800' },
          { name: 'Vitosha Mountain', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' },
          { name: 'National Palace of Culture', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800' }
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
          { name: 'Old Town', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800' },
          { name: 'Roman Theatre', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Nebet Tepe', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Kapana Creative District', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800' }
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
          { name: 'Upper Town', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800' },
          { name: 'Cathedral of Zagreb', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800' },
          { name: 'Mirogoj Cemetery', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Dolac Market', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800' }
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
          { name: 'City Walls', image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800' },
          { name: 'Old Town', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800' },
          { name: 'Lokrum Island', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800' },
          { name: 'Cable Car', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' }
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
          { name: 'Diocletian\'s Palace', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800' },
          { name: 'Riva Promenade', image: 'https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=800' },
          { name: 'Marjan Hill', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Bacvice Beach', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800' }
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
          { name: 'Belgrade Fortress', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' },
          { name: 'Knez Mihailova Street', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800' },
          { name: 'Skadarlija', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Temple of Saint Sava', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800' }
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
          { name: 'Ljubljana Castle', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' },
          { name: 'Triple Bridge', image: 'https://images.unsplash.com/photo-1514890547357-a9ee192728217?w=800' },
          { name: 'Tivoli Park', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' },
          { name: 'Dragon Bridge', image: 'https://images.unsplash.com/photo-1514890547357-a9ee192728217?w=800' }
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
          { name: 'Bratislava Castle', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' },
          { name: 'Old Town', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800' },
          { name: 'Blue Church', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800' },
          { name: 'Slavin Memorial', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' }
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
          { name: 'Nyhavn', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Tivoli Gardens', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' },
          { name: 'The Little Mermaid', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Rosenborg Castle', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' }
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
          { name: 'AROS Art Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800' },
          { name: 'Old Town', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800' },
          { name: 'Moesgaard Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800' },
          { name: 'Aarhus Cathedral', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800' }
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
          { name: 'Gamla Stan', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Vasa Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800' },
          { name: 'ABBA Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800' },
          { name: 'Djurgården', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' }
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
          { name: 'Liseberg', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Haga District', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800' },
          { name: 'Universeum', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Feskekôrka', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' }
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
          { name: 'Turning Torso', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Malmö Castle', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' },
          { name: 'Ribersborg Beach', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800' },
          { name: 'Lilla Torg', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' }
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
          { name: 'Vigeland Park', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' },
          { name: 'Viking Ship Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800' },
          { name: 'Opera House', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Akershus Fortress', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' }
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
          { name: 'Bryggen', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Fløyen', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Fish Market', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800' },
          { name: 'Fjord Tours', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' }
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
          { name: 'Nidaros Cathedral', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800' },
          { name: 'Old Town Bridge', image: 'https://images.unsplash.com/photo-1514890547357-a9ee192728217?w=800' },
          { name: 'Ringve Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800' },
          { name: 'Bakklandet', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' }
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
          { name: 'Suomenlinna', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Helsinki Cathedral', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800' },
          { name: 'Temppeliaukio Church', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800' },
          { name: 'Design District', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800' }
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
          { name: 'Pyynikki Observation Tower', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Tampere Cathedral', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800' },
          { name: 'Särkänniemi', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Vapriikki Museum', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800' }
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
          { name: 'Hallgrímskirkja', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Blue Lagoon', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800' },
          { name: 'Golden Circle', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Northern Lights', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' }
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
          { name: 'Trinity College', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Guinness Storehouse', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'Temple Bar', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800' },
          { name: 'Dublin Castle', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' }
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
          { name: 'English Market', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800' },
          { name: 'Blarney Castle', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' },
          { name: 'Cork City Gaol', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
          { name: 'St. Fin Barre\'s Cathedral', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800' }
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
          { name: 'Latin Quarter', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800' },
          { name: 'Galway Cathedral', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800' },
          { name: 'Salthill Promenade', image: 'https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=800' },
          { name: 'Claddagh', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' }
        ],
        coordinates: { lat: 53.2707, lng: -9.0568 },
        estimatedDuration: 8,
      },
    ],
  },
];