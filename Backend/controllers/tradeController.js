const Trade = require("../models/Trade");

const createTrade = async (req, res) => {
  try {
    const trade = await Trade.create(req.body);

    res.status(201).json({
      message: "Trade Saved Successfully",
      trade,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getTrades = async (req, res) => {
  try {
    const trades = await Trade.find();

    res.json(trades);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getDashboardStats = async (req, res) => {
  try {
    const trades = await Trade.find();

    const totalTrades = trades.length;

    const winningTrades = trades.filter(
      (trade) => trade.profitLoss > 0
    ).length;

    const losingTrades = trades.filter(
      (trade) => trade.profitLoss <= 0
    ).length;

    const netPnL = trades.reduce(
      (total, trade) => total + trade.profitLoss,
      0
    );

    const winRate =
      totalTrades > 0
        ? ((winningTrades / totalTrades) * 100).toFixed(2)
        : 0;

    res.json({
      totalTrades,
      winningTrades,
      losingTrades,
      winRate,
      netPnL,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createTrade,
  getTrades,
  getDashboardStats,
};