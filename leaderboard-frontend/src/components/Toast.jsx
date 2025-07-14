import { useLeaderboard } from '../context/LeaderboardContext';
import { useEffect } from 'react';

const Toast = () => {
  const { toast, setToast } = useLeaderboard();

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  if (!toast) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white py-2 px-4 rounded shadow-lg">
      {toast}
    </div>
  );
};

export default Toast;
