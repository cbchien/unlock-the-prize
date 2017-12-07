const mongoose = require('mongoose');

// require schemas 
const Task = require('../src/server/models/Task');
// data to write to db
const tasks = require('../data/rawdata');

mongoose.Promise = global.Promise;
const MONGO_URL = process.env.MONGO_URL ||
  'mongodb://localhost:27017/jobbatical-clone';
mongoose
  .connect(MONGO_URL, { useMongoClient: true })
  .then(() => Task.remove({}))
  .then(() => Task.create(tasks))
  .then(() => mongoose.disconnect())
  .then(() => {
    console.log(`Successfully populated db at ${MONGO_URL}`);
  })
  .catch((err) => {
    console.error(`Fail to populate db at ${MONGO_URL}:\n${err}`);
  });

