'use strict'

const KeyValueModel = require("../models/KeyValue.model");

exports.createKeyValue = async (data) => {
    var record = await saveData(data);
    if(record){
        return record;
    }
};

async function saveData(data) {
    let record = new KeyValueModel();
    record.key = data.key;
    record.value = data.value;
    record = await record.save();
    if (!record) {
        const error = new Error("Wrong request");
        error.statusCode = 400;
        throw error;
    }
    return record;
  }
  
  exports.updateKeyValue = async (data) => {
    let record = await KeyValueModel.findById(data.params.id);
    if (!record) {
        const error = new Error("Wrong request");
        error.statusCode = 400;
        throw error;
    }
    record.value = data.body.value;
    record = await record.save();
    if(record){
        return record;
    }
};

exports.deleteKeyValue = async (data) => {
    let record = await KeyValueModel.findById(data.params.id);
    if (!record) {
        const error = new Error("Wrong request");
        error.statusCode = 400;
        throw error;
    }
    await record.delete();
    return { message: "success" };
};