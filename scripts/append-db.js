const mongoose = require('mongoose');

// require schemas 
const Listing = require('../src/server/models/Listing');
// data to write to db
const listings = require('../data/rawdata');

mongoose.Promise = global.Promise;
const MONGO_URL = process.env.MONGO_URL ||
  'mongodb://localhost:27017/yellow-book';
mongoose
  .connect(MONGO_URL, { useMongoClient: true })
  .then(() => Listing.create(listings))
  .then(() => mongoose.disconnect())
  .then(() => {
    console.log(`Successfully populated db at ${MONGO_URL}`);
  })
  .catch((err) => {
    console.error(`Fail to populate db at ${MONGO_URL}:\n${err}`);
  });

