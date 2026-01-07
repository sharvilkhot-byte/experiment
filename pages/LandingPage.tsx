
import React, { useState } from 'react';
import Button from '../components/Button';

const LandingPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    travelStyle: 'budget',
    interest: 'nature'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Welcome, Adventurer ${formData.name}! Your journey begins now.`);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-black mb-6 text-duo-green">
            The free, fun, and effective way to travel!
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-2xl">
            Experience the world like a game. Earn points, level up your cultural fluency, and unlock hidden destinations with every booking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" variant="primary">GET STARTED</Button>
            <Button size="lg" variant="outline">I ALREADY HAVE AN ACCOUNT</Button>
          </div>
        </div>
        <div className="flex-1 relative">
          <img 
            src="https://picsum.photos/seed/travel_hero/800/800" 
            alt="Travel Adventure" 
            className="rounded-[3rem] border-8 border-white dark:border-gray-800 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
          />
          <div className="absolute -bottom-6 -left-6 bg-duo-yellow p-6 rounded-3xl shadow-duo-yellow animate-bounce">
            <span className="text-white font-black">Level 1: Novice Explorer 🗺️</span>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-6 flex items-center justify-center text-5xl">🎯</div>
            <h3 className="text-2xl font-black mb-4">Daily Quests</h3>
            <p className="text-gray-500 dark:text-gray-400">Complete mini-challenges to earn travel credits and discounts.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-6 flex items-center justify-center text-5xl">🏆</div>
            <h3 className="text-2xl font-black mb-4">Leaderboards</h3>
            <p className="text-gray-500 dark:text-gray-400">Compete with friends to see who becomes the ultimate Globetrotter.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-6 flex items-center justify-center text-5xl">💎</div>
            <h3 className="text-2xl font-black mb-4">Unlock Treasures</h3>
            <p className="text-gray-500 dark:text-gray-400">Find rare collectibles at locations to unlock premium airport lounges.</p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="signup" className="max-w-3xl mx-auto px-4 py-24 w-full">
        <div className="bg-white dark:bg-duo-dark border-4 border-duo-border dark:border-gray-800 rounded-[3rem] p-8 md:p-12 shadow-duo-white dark:shadow-duo-dark">
          <h2 className="text-4xl font-black text-center mb-8 text-duo-blue">Start your streak!</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-black text-gray-400 uppercase tracking-widest mb-2">Adventure Name</label>
              <input 
                type="text" 
                required
                className="w-full p-4 bg-gray-100 dark:bg-gray-800 rounded-2xl border-2 border-transparent focus:border-duo-blue outline-none transition-all"
                placeholder="What should we call you?"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-black text-gray-400 uppercase tracking-widest mb-2">Communication Link (Email)</label>
              <input 
                type="email" 
                required
                className="w-full p-4 bg-gray-100 dark:bg-gray-800 rounded-2xl border-2 border-transparent focus:border-duo-blue outline-none transition-all"
                placeholder="Where should we send your maps?"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-black text-gray-400 uppercase tracking-widest mb-2">Travel Style</label>
                <select 
                  className="w-full p-4 bg-gray-100 dark:bg-gray-800 rounded-2xl border-2 border-transparent focus:border-duo-blue outline-none transition-all appearance-none"
                  value={formData.travelStyle}
                  onChange={(e) => setFormData({...formData, travelStyle: e.target.value})}
                >
                  <option value="budget">Backpacker (Budget)</option>
                  <option value="luxury">First Class (Luxury)</option>
                  <option value="solo">Lone Wolf (Solo)</option>
                  <option value="group">The Party (Group)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-black text-gray-400 uppercase tracking-widest mb-2">Prime Interest</label>
                <select 
                  className="w-full p-4 bg-gray-100 dark:bg-gray-800 rounded-2xl border-2 border-transparent focus:border-duo-blue outline-none transition-all appearance-none"
                  value={formData.interest}
                  onChange={(e) => setFormData({...formData, interest: e.target.value})}
                >
                  <option value="nature">Nature & Wild</option>
                  <option value="city">Urban Jungle</option>
                  <option value="history">Time Traveler (History)</option>
                  <option value="food">Culinary Quest</option>
                </select>
              </div>
            </div>
            <Button type="submit" fullWidth size="lg" variant="secondary" className="mt-4">
              JOIN THE ADVENTURE
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
