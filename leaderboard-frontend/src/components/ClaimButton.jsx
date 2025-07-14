import { useLeaderboard } from '../context/LeaderboardContext';

const ClaimButton = () => {
  const { selectedUserId, claimPoints } = useLeaderboard();

  return (
    <button
      disabled={!selectedUserId}
      onClick={claimPoints}
      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
    >
      Claim Points
    </button>
  );
};

export default ClaimButton;
