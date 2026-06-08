import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RiskCalculator from "./components/RiskCalculator";
import MarketScanner from "./components/MarketScanner";
import TradeJournal from "./components/TradeJournal";
import PerformanceDashboard from "./components/PerformanceDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./Pages/Login";
import Register from "./Pages/Register";

function Dashboard() {
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

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;