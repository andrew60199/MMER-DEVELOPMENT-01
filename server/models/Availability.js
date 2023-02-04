const { Schema, model } = require('mongoose');

const availabilitySchema = new Schema(
    {
        monday: {
            type: Number,
            min: 0,
            default: 0
        },
        tuesday: {
            type: Number,
            min: 0,
            default: 0
        },
        wednesday: {
            type: Number,
            min: 0,
            default: 0
        },
        thursday: {
            type: Number,
            min: 0,
            default: 0
        },
        friday: {
            type: Number,
            min: 0,
            default: 0
        },
        saturday: {
            type: Number,
            min: 0,
            default: 0
        },
        sunday: {
            type: Number,
            min: 0,
            default: 0
        },
    }
);

module.exports = availabilitySchema;