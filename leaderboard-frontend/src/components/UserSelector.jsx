import { useState } from 'react';
import { useLeaderboard } from '../context/LeaderboardContext';
import { FaUser, FaPlus } from 'react-icons/fa';

const UserSelector = () => {
  const {
    users,
    selectedUserId,
    setSelectedUserId,
    addUser
  } = useLeaderboard();

  const [newUserName, setNewUserName] = useState('');

  const handleAddUser = () => {
    if (newUserName.trim() === '') return;
    addUser(newUserName);
    setNewUserName('');
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white shadow-md w-full">
      <div className="flex flex-col gap-4">
        <label className="text-sm font-semibold flex items-center gap-2">
          <FaUser className="text-lg" />
          Select User
        </label>

        <select
          value={selectedUserId || ''}
          onChange={(e) => setSelectedUserId(e.target.value)}
          className="bg-white/20 text-black p-2 rounded-md border border-white/30 outline-none"
        >
          <option value="">-- Select User --</option>
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.name} – {user.totalPoints} points
            </option>
          ))}
        </select>

        <div className="flex flex-col sm:flex-row items-center gap-2">
          <input
            type="text"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            placeholder="Enter new user name"
            className="bg-white/20 text-white px-3 py-2 rounded-md border border-white/30 outline-none w-full sm:w-auto"
          />
          <button
            onClick={handleAddUser}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white font-semibold"
          >
            <FaPlus /> Add New User
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserSelector;
