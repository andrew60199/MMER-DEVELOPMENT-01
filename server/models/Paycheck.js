const { Schema, model } = require('mongoose');

const paycheckSchema = new Schema(
    {
        date: {
            type: Date,
            default: Date.now,
            required: true
        },
        hourlyRate: {
            type: Number,
            default: 60
        },
        hours: {
            type: Number,
            min: 0,
            default: 0
        }
    }
);

module.exports = paycheckSchema;