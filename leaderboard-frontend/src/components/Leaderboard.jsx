import { useLeaderboard } from '../context/LeaderboardContext';

const Leaderboard = () => {
  const { leaderboard } = useLeaderboard();

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-2">🏆 Leaderboard</h2>
    

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-black">
              <th className="p-2">Rank</th>
              <th className="p-2">Name</th>
              <th className="p-2">Total Points</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="p-2">{user.rank}</td>
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
