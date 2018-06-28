const mongoose = require('mongoose');

// require schemas 
// const Job = require('../src/server/models/Job');
// const Contact = require('../src/server/models/Contact');
const Task = require('../src/server/models/Listing');

mongoose.Promise = global.Promise;
const MONGO_URL = process.env.MONGO_URL || 
  'mongodb://localhost:27017/yellow-book';
mongoose
  .connect(MONGO_URL, { useMongoClient: true })
  // .then(() => Job.remove({}))
  // .then(() => Contact.remove({}))
  .then(() => Task.remove({}))
  .then(() => mongoose.disconnect())
  .then(() => {
    console.log(`Successfully cleared db at ${MONGO_URL}`);
  })
  .catch((err) => {
    console.error(`Fail to clear db at ${MONGO_URL}:\n${err}`);
  });

