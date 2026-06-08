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

  const deleteTrade = async (id) => {
    try {
      await api.delete(`/trades/${id}`);
      fetchTrades();
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
          className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Trade
        </button>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full bg-slate-800 rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-slate-700">
              <th className="p-3 text-left">Coin</th>
              <th className="p-3 text-left">Entry</th>
              <th className="p-3 text-left">Exit</th>
              <th className="p-3 text-left">P&L</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {trades.map((trade) => (
              <tr
                key={trade._id}
                className="border-b border-slate-700"
              >
                <td className="p-3 font-bold">
                  {trade.symbol}
                </td>

                <td className="p-3">
                  ${trade.entryPrice}
                </td>

                <td className="p-3">
                  ${trade.exitPrice}
                </td>

                <td
                  className={`p-3 ${
                    trade.profitLoss >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  ${trade.profitLoss}
                </td>

                <td className="p-3">
                  <button
                    onClick={() =>
                      deleteTrade(trade._id)
                    }
                    className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TradeJournal;