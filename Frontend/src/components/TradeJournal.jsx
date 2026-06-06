import { useEffect, useState } from "react";

function TradeJournal() {
  const [coin, setCoin] = useState("");
  const [entry, setEntry] = useState("");
  const [exit, setExit] = useState("");
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    const savedTrades = localStorage.getItem("trades");

    if (savedTrades) {
      setTrades(JSON.parse(savedTrades));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("trades", JSON.stringify(trades));
  }, [trades]);

  const addTrade = () => {
    if (!coin || !entry || !exit) return;

    const pnl = Number(exit) - Number(entry);

    const newTrade = {
      id: Date.now(),
      coin,
      entry,
      exit,
      pnl,
    };

    setTrades([...trades, newTrade]);

    setCoin("");
    setEntry("");
    setExit("");
  };

  const deleteTrade = (id) => {
    setTrades(trades.filter((trade) => trade.id !== id));
  };

  return (
    <div className="mt-12">
      <h2 className="text-4xl font-bold mb-6">
        Trade Journal
      </h2>

      <div className="bg-slate-800 p-6 rounded-xl">
        <input
          type="text"
          placeholder="Coin Name"
          value={coin}
          onChange={(e) => setCoin(e.target.value)}
          className="w-full p-3 mb-3 rounded-lg bg-slate-700"
        />

        <input
          type="number"
          placeholder="Entry Price"
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          className="w-full p-3 mb-3 rounded-lg bg-slate-700"
        />

        <input
          type="number"
          placeholder="Exit Price"
          value={exit}
          onChange={(e) => setExit(e.target.value)}
          className="w-full p-3 mb-3 rounded-lg bg-slate-700"
        />

        <button
          onClick={addTrade}
          className="bg-blue-600 px-5 py-2 rounded-lg"
        >
          Add Trade
        </button>
      </div>

      <div className="mt-6">
        {trades.map((trade) => (
          <div
            key={trade.id}
            className="bg-slate-800 p-4 rounded-xl mb-3 flex justify-between"
          >
            <div>
              <h3 className="font-bold text-lg">
                {trade.coin}
              </h3>

              <p>
                Entry: ${trade.entry}
              </p>

              <p>
                Exit: ${trade.exit}
              </p>

              <p
                className={
                  trade.pnl >= 0
                    ? "text-green-400"
                    : "text-red-400"
                }
              >
                P&L: ${trade.pnl}
              </p>
            </div>

            <button
              onClick={() => deleteTrade(trade.id)}
              className="bg-red-600 px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TradeJournal;