'use strict';
module.exports = function(app) {
	var product = require('../controllers/productController');
	var transaction = require('../controllers/transactionController');

	// ===================
	// Product Routes
	// ===================
	app.route('/product')
		.get(product.get_all_products)
		.post(product.create_a_product);

	app.route('/product/:productId')
		.get(product.get_a_product)
		.put(product.update_a_product)
		.delete(product.delete_a_product);


	// ===================
	// Transaction Routes
	// ===================
	app.route('/transaction')
		.get(transaction.get_all_transactions)
		.post(transaction.create_a_transaction);

	app.route('/transaction/:transactionId')
		.get(transaction.get_a_transaction)
		.put(transaction.update_a_transaction)
		.delete(transaction.delete_a_transaction);

};