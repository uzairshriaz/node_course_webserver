const mongoose = require('mongoose');
//do not require call back will not execute until db connects
mongoose.promise = global.promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports={mongoose};
