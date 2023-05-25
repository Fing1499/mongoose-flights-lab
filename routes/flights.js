var express = require('express');
var router = express.Router();

const flightsCtrl = require('../controller/flights');


router.get('/new', flightsCtrl.new);

router.post('/', flightsCtrl.create);

router.get('/:id', flightsCtrl.show);

router.get('/:id/edit', flightsCtrl.showEditPage);

router.get('/', flightsCtrl.index);



module.exports = router;
