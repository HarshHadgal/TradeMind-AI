const express = require("express");

const {
  createTrade,
  getTrades,
  getDashboardStats,
} = require("../controllers/tradeController");

const router = express.Router();

router.post("/", createTrade);
router.get("/", getTrades);
router.get("/stats", getDashboardStats);

module.exports = router;

