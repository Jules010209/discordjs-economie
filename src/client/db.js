const A = require('../database/mongodb');
const B = require('../database/mysql');

const func = require('../utils/function');
const func2 = require('../utils/function2');

module.exports = {
    mongooseConnect: A,
    mysqlConnect: B,

    mongoose: func,
    mysql: func2
}