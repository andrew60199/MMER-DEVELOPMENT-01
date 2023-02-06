const { Schema, model } = require('mongoose');
const allocationSchema = require('./Allocation');
const availabilitySchema = require('./Availability')
const paycheckSchema = require('./Paycheck')

const employeeSchema = new Schema(
  {
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
    },
    bankDetails: {
        type: String
    },
    availability: [availabilitySchema],
    schedule: [allocationSchema],
    paychecks: [paycheckSchema],
    skills: {
      type: String,
      required: true
    },
    team: {
      type: String,
      required: true,
      default: 'MMER'
    }
  },
);

const Employee = model('Employee', employeeSchema);

module.exports = Employee;