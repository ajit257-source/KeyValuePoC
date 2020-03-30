'use strict';

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KeyValueSchema = new Schema({
    key: String, 
    value: String,
    createdAt: {type:Date, default:Date.now}    
    
});

module.exports = mongoose.model("KeyValueModel", KeyValueSchema);
