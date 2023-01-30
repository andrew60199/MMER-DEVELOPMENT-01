const db = require('../config/connection');
const userSeeds = require('./userSeeds.json');
const { User } = require('../models');

db.once('open', async () => {
  
  // Running into a validation error on the User model. I believe it may have something to do with the types or ID... 
  try {
    await User.create(userSeeds);

    console.log('Users seeded!');

  } catch (error) {
    console.log(error.message)
  }

  process.exit(0);
});
