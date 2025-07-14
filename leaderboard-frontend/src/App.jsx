import { useState } from 'react';
import UserSelector from './components/UserSelector';
import ClaimButton from './components/ClaimButton';
import Leaderboard from './components/Leaderboard';
import StatsCard from './components/StatsCard';
import TopPerformers from './components/TopPerformers';
import Toast from './components/Toast';
import ClaimHistory from './components/ClaimHistory'; // <-- new modal import

const App = () => {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2b1055] to-[#7597de] text-white px-4 py-6">
      <h1 className="text-4xl font-bold text-center mb-2 text-yellow-300">🏆 Point Rally Leaderboard</h1>
      <p className="text-center text-white/80 mb-10">Compete, Claim Points, and Rise to the Top!</p>

      <TopPerformers />
      <StatsCard />

      {/* 👇 PLACE IT HERE 👇 */}
      <div className="flex justify-end mt-4">
        <button
          onClick={() => setShowHistory(true)}
          className="bg-white/10 border border-white px-4 py-2 rounded-lg text-white hover:bg-white/20"
        >
          ⏳ Show History
        </button>
      </div>
      {/* 👆 PLACE IT ABOVE THE GRID 👆 */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <UserSelector />
        <Leaderboard />
      </div>

      <div className="mt-6">
        <ClaimButton />
      </div>

      {showHistory && <ClaimHistory onClose={() => setShowHistory(false)} />}
      <Toast />
    </div>
  );
};

export default App;
