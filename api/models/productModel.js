'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: {
    type: String,
    required: 'Product name is required'
  },
  price: {
    type: Number,
    required: 'Product price is required'
  },
  imageUrl: {
    type: String,
    required: 'Product image URL is required'
  },
  category: {
    type: String,
    default: 'None'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', ProductSchema);