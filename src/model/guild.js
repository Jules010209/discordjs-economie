const mongoose = require('mongoose');

const GuildShema = mongoose.Schema({
    id:String,
    users: { 'type': [], 'default': [] },
});

module.exports = mongoose.model('Guild', GuildShema);