const { AuthenticationError } = require('apollo-server-express');
const { User, Client, Employee } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({
          $or: [{ _id: context.user._id }, { name: context.name }],
        })
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    client: async (parent, args, context) => {
      if (context.user) {
        return await Client.findOne({ userId: context.user._id })
      }
      throw new AuthenticationError('Unknown client');
    },
    employee: async (parent, args, context) => {
      if (context.user) {
        return await Employee.findOne({ userId: context.user._id })
      }
      throw new AuthenticationError('Unknown employee');
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addUser: async (parent, { name, email, password, terms }) => {
      const user = await User.create({ name, email, password, terms });
      const token = signToken(user);
      return { token, user };
    },
  }
};

module.exports = resolvers;
