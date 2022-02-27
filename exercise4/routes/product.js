var express = require('express');
var router = express.Router();
var state = require('../state.json');


router.get('/product', function (req, res, next) {
    console.log(state);
    for (var prod = 0; prod < state.products.length; prod++) {
        if (state.products[prod].productNumber == req.headers.productNumber) {
            res.json(state.products[prod]);
            return;
        }
    }
}
);


module.exports = router;
