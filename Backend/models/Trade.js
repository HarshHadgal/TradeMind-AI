const mongoose = require("mongoose");

const tradeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    symbol: {
      type: String,
      required: true,
    },

    entryPrice: {
      type: Number,
      required: true,
    },

    exitPrice: {
      type: Number,
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
    },

    profitLoss: {
      type: Number,
      required: true,
    },

    tradeType: {
      type: String,
      enum: ["Long", "Short"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Trade", tradeSchema);