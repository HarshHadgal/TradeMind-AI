import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RiskCalculator from "./components/RiskCalculator";
import MarketScanner from "./components/MarketScanner";
import TradeJournal from "./components/TradeJournal";
import PerformanceDashboard from "./components/PerformanceDashboard";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-5">
      <Navbar />

      <Hero name="Harsh" />

      <PerformanceDashboard />

      <MarketScanner />

      <RiskCalculator />

      <TradeJournal />
    </div>
  );
}

export default App;