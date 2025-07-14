import { createContext, useContext, useEffect, useState } from 'react';
import API from '../api';

const LeaderboardContext = createContext();

export const useLeaderboard = () => useContext(LeaderboardContext);

export const LeaderboardProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [toast, setToast] = useState(null);

  const fetchUsers = async () => {
    const res = await API.get('/');
    setUsers(res.data);
  };

  const fetchLeaderboard = async () => {
    const res = await API.get('/leaderboard');
    setLeaderboard(res.data);
  };

  const addUser = async (name) => {
    await API.post('/add', { name });
    fetchUsers();
    fetchLeaderboard();
  };

  const claimPoints = async () => {
    const res = await API.post(`/claim/${selectedUserId}`);
    setToast(`${res.data.user.name} claimed ${res.data.pointsClaimed} points!`);
    fetchUsers();
    fetchLeaderboard();
  };

  useEffect(() => {
    fetchUsers();
    fetchLeaderboard();
  }, []);

  return (
    <LeaderboardContext.Provider
      value={{
        users,
        leaderboard,
        selectedUserId,
        setSelectedUserId,
        addUser,
        claimPoints,
        toast,
        setToast,
      }}
    >
      {children}
    </LeaderboardContext.Provider>
  );
};
