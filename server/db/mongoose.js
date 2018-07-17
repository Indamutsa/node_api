var mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://arsene:arsene1@ds021979.mlab.com:21979/udemy-api';
const local_mongo = 'mongodb://localhost:27017/TodoApp';
mongoose.Promise = global.Promise;
mongoose.connect(local_mongo, { useNewUrlParser: true });

module.exports = { mongoose };
