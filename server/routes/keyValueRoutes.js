'use strict'

var express = require('express');
var controller = require('../controllers/keyValueController');
const {hasParentKeywords, hasKeywords, hasAntiSentimentWords,
    hasTextContentUrl, hasAudioContentUrl, hasDeviceId} = require('../validations/validators'); //custom validators
var router = express.Router();

// mlaAlter Routes
router.get('/keyValue/all', controller.index);

router.post('/keyValue/create', controller.createKeyValue);

router.put('/keyValue/update/:id', controller.updateKeyValue);

router.delete('/keyValue/delete/:id', controller.deleteKeyValue);


module.exports = router;
