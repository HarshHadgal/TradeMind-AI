import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RiskCalculator from "./components/RiskCalculator";
import DashboardCard from "./components/DashboardCard";
import MarketScanner from "./components/MarketScanner";
import TradeJournal from "./components/TradeJournal";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-5">
      <Navbar />
      <Hero name="Harsh" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
  <DashboardCard
    title="Account Balance"
    value="₹10,000"
  />

  <DashboardCard
    title="Risk Amount"
    value="₹400"
  />

  <DashboardCard
    title="Total Trades"
    value="12"
  />
</div>
      <MarketScanner />
      <RiskCalculator />
      <TradeJournal />
    </div>
  );
}

export default App;