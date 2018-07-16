const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((results) => {
//     console.log(results);
// });

// Todo.findByIdAndRemove('5b4ccaf2af4eb10014283320').then((doc) => {
//     console.log(doc);
// });

Todo.findOneAndRemove({ _id: '5b4ccb58af4eb10014283321' }).then((doc) => {
    console.log(doc);
});
