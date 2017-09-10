'use strict';

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const postSchema = new Schema({
    title : String,
    body  : String

});


module.exports = mongoose.model('User', postSchema);