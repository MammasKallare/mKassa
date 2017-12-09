var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'), // Mongoose for model and Mongodb interfacing
  Product = require('./api/models/productModel'), // Loading model for Product
  Transaction = require('./api/models/transactionModel'), // Loading model for Transaction
  bodyParser = require('body-parser');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mkassa');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var routes = require('./api/routes/mkkassaRoutes');
routes(app);

app.listen(port);

console.log('[ Info ] mKassa RESTful API server started on: ' + port);