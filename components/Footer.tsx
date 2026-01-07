
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-duo-green text-white py-20 px-4 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h4 className="font-black text-lg mb-6 uppercase tracking-widest opacity-80">Explore</h4>
            <ul className="space-y-4 font-bold">
              <li><a href="#" className="hover:underline">Destinations</a></li>
              <li><a href="#" className="hover:underline">Travel Games</a></li>
              <li><a href="#" className="hover:underline">Leaderboard</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-lg mb-6 uppercase tracking-widest opacity-80">Community</h4>
            <ul className="space-y-4 font-bold">
              <li><a href="#" className="hover:underline">Adventures</a></li>
              <li><a href="#" className="hover:underline">Ambassadors</a></li>
              <li><a href="#" className="hover:underline">Gift Cards</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-lg mb-6 uppercase tracking-widest opacity-80">Company</h4>
            <ul className="space-y-4 font-bold">
              <li><a href="#" className="hover:underline">Our Story</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-lg mb-6 uppercase tracking-widest opacity-80">Support</h4>
            <ul className="space-y-4 font-bold">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Safety</a></li>
              <li><a href="#" className="hover:underline">Terms & Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t-2 border-white/20 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white text-duo-green rounded-lg flex items-center justify-center font-black">V</div>
            <span className="text-xl font-black tracking-tight">VoyaGo</span>
          </div>
          <div className="flex space-x-8 font-black text-sm">
            <a href="#" className="hover:opacity-80">FACEBOOK</a>
            <a href="#" className="hover:opacity-80">TWITTER</a>
            <a href="#" className="hover:opacity-80">INSTAGRAM</a>
          </div>
          <p className="text-sm font-bold opacity-60">© 2024 VoyaGo Travel. Level up your journey.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
