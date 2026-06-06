function Navbar() {
  return (
    <nav className="flex justify-between items-center border-b border-slate-700 pb-4">
      <h1 className="text-3xl font-bold">TradeMind AI</h1>

      <div className="space-x-4">
        <button className="px-4 py-2 bg-slate-700 rounded-lg">
          Dashboard
        </button>

        <button className="px-4 py-2 bg-slate-700 rounded-lg">
          Markets
        </button>

        <button className="px-4 py-2 bg-slate-700 rounded-lg">
          Journal
        </button>
      </div>
    </nav>
  );
}

export default Navbar;