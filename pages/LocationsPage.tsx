
import React, { useState } from 'react';
import Button from '../components/Button';

interface Location {
  id: number;
  name: string;
  country: string;
  season: 'summer' | 'winter' | 'spring' | 'autumn';
  rating: number;
  tags: string[];
  image: string;
}

const LOCATIONS: Location[] = [
  { id: 1, name: "Santorini", country: "Greece", season: "summer", rating: 4.9, tags: ["beach", "romantic"], image: "https://picsum.photos/seed/santorini/600/400" },
  { id: 2, name: "Zermatt", country: "Switzerland", season: "winter", rating: 4.8, tags: ["ski", "luxury"], image: "https://picsum.photos/seed/zermatt/600/400" },
  { id: 3, name: "Kyoto", country: "Japan", season: "spring", rating: 4.9, tags: ["culture", "zen"], image: "https://picsum.photos/seed/kyoto/600/400" },
  { id: 4, name: "Vermont", country: "USA", season: "autumn", rating: 4.7, tags: ["nature", "scenic"], image: "https://picsum.photos/seed/vermont/600/400" },
  { id: 5, name: "Bali", country: "Indonesia", season: "summer", rating: 4.6, tags: ["tropical", "wellness"], image: "https://picsum.photos/seed/bali/600/400" },
  { id: 6, name: "Lapland", country: "Finland", season: "winter", rating: 4.9, tags: ["arctic", "magic"], image: "https://picsum.photos/seed/lapland/600/400" },
];

const LocationsPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [activeSeason, setActiveSeason] = useState<string>('all');

  const filtered = LOCATIONS.filter(loc => {
    const matchesSearch = loc.name.toLowerCase().includes(search.toLowerCase()) || 
                          loc.country.toLowerCase().includes(search.toLowerCase());
    const matchesSeason = activeSeason === 'all' || loc.season === activeSeason;
    return matchesSearch && matchesSeason;
  });

  const seasons = [
    { id: 'all', label: 'ALL', icon: '🌍' },
    { id: 'summer', label: 'SUMMER', icon: '☀️' },
    { id: 'winter', label: 'WINTER', icon: '❄️' },
    { id: 'spring', label: 'SPRING', icon: '🌸' },
    { id: 'autumn', label: 'AUTUMN', icon: '🍂' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-duo-blue mb-4">Where to next?</h1>
        <p className="text-xl text-gray-400">Search 500+ premium destinations</p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative group">
          <input
            type="text"
            placeholder="Search city or country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-6 pl-16 bg-gray-100 dark:bg-gray-800 rounded-3xl border-4 border-duo-border dark:border-gray-700 focus:border-duo-blue outline-none transition-all text-xl font-bold shadow-duo-white dark:shadow-duo-dark"
          />
          <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl">🔍</span>
        </div>
      </div>

      {/* Season Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {seasons.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveSeason(s.id)}
            className={`px-8 py-3 rounded-2xl font-black transition-all press-effect border-2 shadow-duo-white dark:shadow-duo-dark
              ${activeSeason === s.id 
                ? 'bg-duo-blue text-white border-duo-blue shadow-duo-blue' 
                : 'bg-white dark:bg-gray-800 text-gray-400 border-duo-border dark:border-gray-700 hover:border-duo-blue'}
            `}
          >
            <span className="mr-2">{s.icon}</span> {s.label}
          </button>
        ))}
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((loc) => (
          <div key={loc.id} className="group bg-white dark:bg-gray-800 rounded-[2.5rem] border-4 border-duo-border dark:border-gray-700 overflow-hidden shadow-duo-white dark:shadow-duo-dark transition-all hover:-translate-y-2">
            <div className="relative h-64 overflow-hidden">
              <img src={loc.image} alt={loc.name} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" />
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 px-3 py-1 rounded-full font-black text-sm flex items-center">
                ⭐ {loc.rating}
              </div>
              <div className="absolute bottom-4 left-4 flex gap-2">
                {loc.tags.map(tag => (
                  <span key={tag} className="bg-duo-blue text-white text-xs font-black uppercase tracking-tighter px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-black dark:text-gray-100">{loc.name}</h3>
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">{loc.country}</p>
                </div>
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center text-xl">
                  {seasons.find(s => s.id === loc.season)?.icon}
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">DETAILS</Button>
                <Button variant="primary" className="flex-1">BOOK</Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <div className="text-8xl mb-6">🏝️</div>
          <h3 className="text-3xl font-black text-gray-400">No destinations found for this quest!</h3>
          <Button variant="ghost" className="mt-4" onClick={() => {setSearch(''); setActiveSeason('all');}}>CLEAR ALL FILTERS</Button>
        </div>
      )}
    </div>
  );
};

export default LocationsPage;
