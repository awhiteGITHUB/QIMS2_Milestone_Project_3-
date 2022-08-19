const mongoose = require('mongoose')

const Inventory = new mongoose.Schema(
	{
		name: { type: String, required: true },
		qty: { type: Number, required: true, unique: true },
		description: { type: String, required: true },
		//quote: { type: String },
	},
	{ collection: 'record-data' }
)

const model = mongoose.model('InventoryData', Inventory)

module.exports = model