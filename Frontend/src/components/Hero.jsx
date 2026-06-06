function Hero({ name }) {
  return (
    <div className="text-center py-12">
      <h1 className="text-6xl font-bold mb-4">
        Welcome {name} 👋
      </h1>

      <p className="text-xl text-slate-300">
        Analyze markets, manage risk, and track your trading performance.
      </p>
    </div>
  );
}

export default Hero;