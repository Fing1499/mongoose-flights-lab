const express = require('express');
const router = express.Router();
const ticketCtrl = require('../controller/tickets')

console.log('before router');
router.post('/flights/:id/tickets', ticketCtrl.addTicket);
console.log('after router');
module.exports = router;