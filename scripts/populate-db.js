const mongoose = require('mongoose');

// require schemas 
// const Job = require('../src/server/schema/Job');
// data to write to db
// const jobs = require('../data/rawdata');

mongoose.Promise = global.Promise;
const MONGO_URL = process.env.MONGO_URL ||
  'mongodb://localhost:27017/jobbatical-clone';
mongoose
  .connect(MONGO_URL, { useMongoClient: true })
  // .then(() => Job.remove({}))
  // .then(() => Job.create(jobs))
  .then(() => mongoose.disconnect())
  .then(() => {
    console.log(`Successfully populated db at ${MONGO_URL}`);
  })
  .catch((err) => {
    console.error(`Fail to populate db at ${MONGO_URL}:\n${err}`);
  });

