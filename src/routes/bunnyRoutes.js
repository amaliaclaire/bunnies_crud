const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/bunnyController');


router.get('/', ctrl.getBunnies);


module.exports = router;
