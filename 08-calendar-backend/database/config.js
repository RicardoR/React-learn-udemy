const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log('db online');
  } catch (err) {
    throw new Error(`Error initializing the database ${err}`);
  }
};

module.exports = { dbConnection };
