const { Schema, model } = require('mongoose');

const projectSchema = require('./Project')

const clientSchema = new Schema(
  {
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    paymentMethod: {
        type: String,
    },
    prepaidHours: {
        type: Number,
        min: 0,
        default: 0
    },
    projects: [projectSchema]
  },
);

const Client = model('Client', clientSchema);

module.exports = Client;