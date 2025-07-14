// src/components/ClaimHistory.jsx
import { useEffect, useState } from 'react';
import API from '../api';

const ITEMS_PER_PAGE = 10;

const ClaimHistory = ({ onClose }) => {
  const [history, setHistory] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchHistory = async () => {
      const res = await API.get('/history');
      setHistory(res.data);
    };
    fetchHistory();
  }, []);

  const totalPages = Math.ceil(history.length / ITEMS_PER_PAGE);
  const currentData = history.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-start pt-20 z-50">
      <div className="bg-white text-black p-6 rounded-md shadow-lg w-[90%] max-w-3xl max-h-[80vh] overflow-y-auto relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">📜 Claim History</h2>
          <button
            onClick={onClose}
            className="text-red-600 font-bold text-lg hover:text-red-800"
          >
            ✖
          </button>
        </div>

        <table className="w-full text-left border-collapse text-sm mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">User</th>
              <th className="p-2 border">Points</th>
              <th className="p-2 border">Time</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((entry) => (
              <tr key={entry._id} className="border-b">
                <td className="p-2">{entry.userId?.name}</td>
                <td className="p-2">{entry.pointsClaimed}</td>
                <td className="p-2">{new Date(entry.claimedAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ✅ Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-between items-center text-sm">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              ⬅ Prev
            </button>
            <span>
              Page <strong>{page}</strong> of {totalPages}
            </span>
            <button
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Next ➡
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClaimHistory;
