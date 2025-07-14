// src/components/TopPerformers.jsx
import { useLeaderboard } from '../context/LeaderboardContext';

const badgeStyles = ['bg-yellow-400', 'bg-gray-300', 'bg-orange-400'];

const TopPerformers = () => {
  const { leaderboard } = useLeaderboard();
  const topThree = leaderboard.slice(0, 3);

  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl font-bold text-white mb-2">🏆 Top Performers</h2>
      <p className="text-sm text-white/80 mb-6">Leading the leaderboard</p>
      <div className="flex justify-center gap-6">
        {topThree.map((user, index) => (
          <div
            key={user.id}
            className={`rounded-xl p-4 w-32 text-white text-sm font-semibold shadow-md ${badgeStyles[index]} border-2 border-white/30`}
          >
            <p className="text-center">{user.name}</p>
            <p className="text-center text-lg font-bold">{user.points}</p>
            <p className="text-center text-xs">#{user.rank}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPerformers;
