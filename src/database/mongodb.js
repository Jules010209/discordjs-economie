const mongoose = require('mongoose');

function mongooseConnect(uri) {
    const dbOption = {
        autoIndex: false,
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
        family: 4
    };
    
    mongoose.connect(uri, dbOption).then(() => {
        console.log('The client has been connect as mongoose database');
    }).catch(err => {
        console.error(err);
    });
}

module.exports = mongooseConnect;