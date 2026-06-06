import { useState } from "react";

function RiskCalculator() {
  const [balance, setBalance] = useState("");
  const [risk, setRisk] = useState("");

  const riskAmount = (balance * risk) / 100;

  return (
    <div className="max-w-md mx-auto mt-12 bg-slate-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Risk Calculator
      </h2>

      <input
        type="number"
        placeholder="Account Balance"
        value={balance}
        onChange={(e) => setBalance(e.target.value)}
        className="w-full p-3 mb-4 rounded-lg bg-slate-700 text-white outline-none"
      />

      <input
        type="number"
        placeholder="Risk %"
        value={risk}
        onChange={(e) => setRisk(e.target.value)}
        className="w-full p-3 mb-4 rounded-lg bg-slate-700 text-white outline-none"
      />

      <div className="bg-slate-900 p-4 rounded-lg text-center">
        <h3 className="text-2xl font-semibold">
          Risk Amount: ₹{riskAmount || 0}
        </h3>
      </div>
    </div>
  );
}

export default RiskCalculator;