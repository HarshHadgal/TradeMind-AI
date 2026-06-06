import { useEffect, useState } from "react";
import axios from "axios";

function MarketScanner() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana"
      )
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-10">
      <h2 className="text-4xl font-bold mb-5">
        Market Scanner
      </h2>

      <input
        type="text"
        placeholder="Search Coin..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 mb-5 rounded-lg bg-slate-800"
      />

      <div className="grid md:grid-cols-3 gap-4">
        {filteredCoins.map((coin) => (
          <div
            key={coin.id}
            className="bg-slate-800 p-5 rounded-xl"
          >
            <div className="flex items-center gap-3">
              <img
                src={coin.image}
                alt={coin.name}
                className="w-10 h-10"
              />

              <h3 className="text-xl font-bold">
                {coin.name}
              </h3>
            </div>

            <p className="text-green-400 text-2xl mt-3">
              ${coin.current_price.toLocaleString()}
            </p>

            <p
              className={`mt-2 ${
                coin.price_change_percentage_24h >= 0
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketScanner;