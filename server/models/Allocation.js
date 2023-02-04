const { Schema, model } = require('mongoose');

const allocationSchema = new Schema(
    {
        date: {
            type: Date,
            default: Date.now,
            required: true
        },
        requestedHours: {
            type: Number,
            min: 0,
            default: 0,
            required: true
        },
        actualHours: {
            type: Number,
            min: 0,
            default: 0
        },
        employee: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        job: {
            type: String,
            required: true
        },
        zoomLink: {
            type: String,
            default: 'Yet to be provided',
            required: true
        },
        status: {
            type: String,
            default: 'Open',
            required: true
        },
        progressReport: {
            type: String,
            default: 'After each allocation the developer will write up what they achieved in the session. Keep posted for when they submit their report.',
            required: true
        }
    }
);

module.exports = allocationSchema;