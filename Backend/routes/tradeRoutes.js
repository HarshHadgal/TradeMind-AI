const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");

const {
  createTrade,
  getTrades,
  getDashboardStats,
} = require("../controllers/tradeController");

const router = express.Router();

router.post("/", authMiddleware, createTrade);
router.get("/", authMiddleware, getTrades);
router.get("/stats", authMiddleware, getDashboardStats);

module.exports = router;

