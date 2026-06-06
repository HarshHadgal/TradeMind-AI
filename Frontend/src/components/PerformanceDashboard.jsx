function PerformanceDashboard({ trades }) {
  const totalTrades = trades.length;

  const winningTrades = trades.filter(
    (trade) => trade.pnl > 0
  ).length;

  const losingTrades = trades.filter(
    (trade) => trade.pnl < 0
  ).length;

  const totalPnL = trades.reduce(
    (sum, trade) => sum + trade.pnl,
    0
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
      <div className="bg-slate-800 p-5 rounded-xl">
        <h3>Total Trades</h3>
        <p className="text-3xl font-bold">
          {totalTrades}
        </p>
      </div>

      <div className="bg-slate-800 p-5 rounded-xl">
        <h3>Winning Trades</h3>
        <p className="text-3xl font-bold text-green-400">
          {winningTrades}
        </p>
      </div>

      <div className="bg-slate-800 p-5 rounded-xl">
        <h3>Losing Trades</h3>
        <p className="text-3xl font-bold text-red-400">
          {losingTrades}
        </p>
      </div>

      <div className="bg-slate-800 p-5 rounded-xl">
        <h3>Total P&L</h3>

        <p
          className={`text-3xl font-bold ${
            totalPnL >= 0
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          ${totalPnL}
        </p>
      </div>
    </div>
  );
}

export default PerformanceDashboard;