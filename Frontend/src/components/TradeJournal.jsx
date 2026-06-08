import { useEffect, useState } from "react";
import api from "../utils/api";

function TradeJournal() {
  const [coin, setCoin] = useState("");
  const [entry, setEntry] = useState("");
  const [exit, setExit] = useState("");
  const [trades, setTrades] = useState([]);

  const fetchTrades = async () => {
    try {
      const res = await api.get("/trades");

      setTrades(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTrades();
  }, []);

  const addTrade = async () => {
    if (!coin || !entry || !exit) return;

    try {
      const pnl = Number(exit) - Number(entry);

      await api.post("/trades", {
        symbol: coin,
        entryPrice: Number(entry),
        exitPrice: Number(exit),
        quantity: 1,
        profitLoss: pnl,
        tradeType: pnl >= 0 ? "Long" : "Short",
      });

      fetchTrades();

      setCoin("");
      setEntry("");
      setExit("");
    } catch (error) {
      console.error(error);
    }
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
            key={trade._id}
            className="bg-slate-800 p-4 rounded-xl mb-3 flex justify-between"
          >
            <div>
              <h3 className="font-bold text-lg">
                {trade.symbol}
              </h3>

              <p>
                Entry: ${trade.entryPrice}
              </p>

              <p>
                Exit: ${trade.exitPrice}
              </p>

              <p
                className={
                  trade.profitLoss >= 0
                    ? "text-green-400"
                    : "text-red-400"
                }
              >
                P&L: ${trade.profitLoss}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TradeJournal;