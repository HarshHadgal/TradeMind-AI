import { useEffect, useState } from "react";
import axios from "axios";

function PerformanceDashboard() {
  const [stats, setStats] = useState({
    totalTrades: 0,
    winningTrades: 0,
    losingTrades: 0,
    winRate: 0,
    netPnL: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/trades/stats"
        );

        setStats(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">

      <div className="bg-slate-800 p-5 rounded-xl">
        <h3>Total Trades</h3>
        <p className="text-3xl font-bold">
          {stats.totalTrades}
        </p>
      </div>

      <div className="bg-slate-800 p-5 rounded-xl">
        <h3>Winning Trades</h3>
        <p className="text-3xl font-bold text-green-400">
          {stats.winningTrades}
        </p>
      </div>

      <div className="bg-slate-800 p-5 rounded-xl">
        <h3>Losing Trades</h3>
        <p className="text-3xl font-bold text-red-400">
          {stats.losingTrades}
        </p>
      </div>

      <div className="bg-slate-800 p-5 rounded-xl">
        <h3>Win Rate</h3>
        <p className="text-3xl font-bold text-blue-400">
          {stats.winRate}%
        </p>
      </div>

      <div className="bg-slate-800 p-5 rounded-xl">
        <h3>Net P&L</h3>
        <p
          className={`text-3xl font-bold ${
            stats.netPnL >= 0
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          ${stats.netPnL}
        </p>
      </div>

    </div>
  );
}

export default PerformanceDashboard;