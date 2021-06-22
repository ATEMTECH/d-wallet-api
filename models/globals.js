const mongoose = require('mongoose');

const {Schema} = mongoose;

const globalSchema = Schema(
  {
    symbol: {
      type: String,
      required: true,
    },
    network: {
      type: String,
      required: true,
    },
    blockIndex: {
      type: Number,
      default: 0,
    },
    syncDelay: {
      type: Number,
      default: 1000,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = globalSchema;