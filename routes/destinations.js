const express = require('express');
const router = express.Router();

const destinationCtrl = require('../controller/destinations');

console.log('before router')
router.post('/flights/:id/destinations', destinationCtrl.addDestination);
console.log('after router')
module.exports = router;