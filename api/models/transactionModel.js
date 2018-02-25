'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TransactionSchema = new Schema({
  products: {
    type: [Schema.Types.ObjectId],
    required: 'Contents of the transaction is required'
  },
  amountPaid: {
    type: Number,
    required: 'Total transaction amount is required'
  },
  paymentMethod: {
    type: String,
    required: 'Payment method required'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  rejected: {
    type: Boolean,
    default: false
  },
  rejected_message: {
    type: String,
    default: "Not Rejected"
  }
});

module.exports = mongoose.model('Transaction', TransactionSchema);