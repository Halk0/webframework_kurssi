var express = require('express');
var router = express.Router();
var file = require('../state.json')

router.get('/', function (req, res, next) {
    res.json(file.products);
}
);

module.exports = router;
