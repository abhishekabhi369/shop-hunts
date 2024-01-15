const mongoose = require('mongoose');
const pointSchema = new mongoose.Schema({
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number], 
      required: true,
    },
  });
const storeSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Location: {
    type: pointSchema,
    required: true,
  },
  Password:{type:String,
    required: true,},
  Mobile: {
    type: String,
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
});
storeSchema.index({ location: '2dsphere' });
const Store = mongoose.model('Store', storeSchema);

module.exports = Store;
