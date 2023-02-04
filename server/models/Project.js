const { Schema, model } = require('mongoose');
const allocationSchema = require('./Allocation');

const projectSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            required: true
        },
        stage: {
            type: Number,
            default: 0,
            required: true
        },
        totalHours: {
            type: Number,
            min: 0,
            default: 0
        },
        links: [
            {
                type: String,
            },
        ],
        allocations: [allocationSchema],
        developers: [
            {
              type: Schema.Types.ObjectId,
                ref: 'User',  
            }
        ],
    }
);

module.exports = projectSchema;