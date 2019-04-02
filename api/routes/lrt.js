const express = require('express');
const router = express.Router();
const LrtController = require('../controllers/lrt');

router.get('/gyvai', LrtController.GET_LIVE_TV_SHOW_NAMES );

module.exports = router;