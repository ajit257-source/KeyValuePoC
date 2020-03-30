'use strict'

const KeyValueModel = require("../models/KeyValue.model");
const service = require("../services/keyValueservice");
const validationHandler = require("../validations/validationHandler");

//get
exports.index = async (req, res, next) => {
  KeyValueModel.find({}, (err, alert) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(alert);
  });
};

//post
exports.createKeyValue = async (req, res, next) => {
 try {
   validationHandler(req);
   var record = await service.createKeyValue(req.body);
   res.send(record);
  } catch (err) {
   next(err);
  }
};

//put
exports.updateKeyValue = async (req, res, next) => {
  try {
    validationHandler(req);
    var record = await service.updateKeyValue(req);
    res.send(record);
   } catch (err) {
    next(err);
   }
 };

 exports.deleteKeyValue = async (req, res, next) => {
  try {
    validationHandler(req);
    var status = await service.deleteKeyValue(req);
    res.send(status);
   } catch (err) {
    next(err);
   }
 };
