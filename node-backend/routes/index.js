var express = require('express');
var path = require('path');
var router = express.Router();

// To controller.index
var index = require('../controller/index')

router.get('/', index.getAll);
router.get('/test', index.getAll);
router.get('/test/:id', index.getId);

module.exports = router;
