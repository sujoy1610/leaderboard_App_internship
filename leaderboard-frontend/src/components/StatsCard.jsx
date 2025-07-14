// src/components/StatsCard.jsx
import { useEffect, useState } from 'react';
import API from '../api';

const StatsCard = () => {
  const [users, setUsers] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userRes = await API.get('/');
      const historyRes = await API.get('/history');
      setUsers(userRes.data);
      setHistory(historyRes.data);
    };
    fetchData();
  }, []);

  const topScore = users.length
    ? Math.max(...users.map((user) => user.totalPoints))
    : 0;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
      <div className="bg-white/10 backdrop-blur p-4 rounded-lg shadow-md text-center">
        <h4 className="text-lg font-semibold text-yellow-300">Total Users</h4>
        <p className="text-3xl font-bold">{users.length}</p>
      </div>
      <div className="bg-white/10 backdrop-blur p-4 rounded-lg shadow-md text-center">
        <h4 className="text-lg font-semibold text-pink-300">Total Claims</h4>
        <p className="text-3xl font-bold">{history.length}</p>
      </div>
      <div className="bg-white/10 backdrop-blur p-4 rounded-lg shadow-md text-center">
        <h4 className="text-lg font-semibold text-blue-300">Leading Score</h4>
        <p className="text-3xl font-bold">{topScore}</p>
      </div>
    </div>
  );
};

export default StatsCard;
