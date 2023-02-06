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
        const client = await Client.findOne({ userId: context.user._id })

        if (!client) {
          throw new AuthenticationError('Client yet to be set up');
        }

        return client
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
    addClient: async (parent, { userId }) => {
      // try {
        const client = await Client.create({ userId })
        return client
      // } catch(error) {
      //   console.log(error)
      // }
      
    }
  }
};

module.exports = resolvers;
