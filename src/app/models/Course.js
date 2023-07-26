const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String},
    description: {type: String},
    image: {type: String},
    createdAt: {  type: Date, default: DataTransfer.now  },
    updatedAt: {  type: Date, default: DataTransfer.now  }
  });

  module.exports = mongoose.model('Course', Course);
