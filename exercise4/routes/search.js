var express = require('express');
fs = require('fs');
var router = express.Router();


router.get('/search', function (req, res, next) {
    fs.readFileSync('../state.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        const currentState = JSON.parse(data.toString());
        console.log(currentState);
        const resProducts = [];
        if (req.headers.name)
            for (var prod = 0; prod < currentState.products.length; prod++) {
                if (currentState.products[prod].name == req.headers.name) {
                    resProducts.push(currentState.products[prod]);
                }
            }
        else if (req.headers.manufacturer)
            for (var prod = 0; prod < currentState.products.length; prod++) {
                if (currentState.products[prod].manufacturer == req.headers.manufacturer) {
                    resProducts.push(currentState.products[prod]);
                }
            }
        else if (req.headers.category)
            for (var prod = 0; prod < currentState.products.length; prod++) {
                if (currentState.products[prod].category == req.headers.category) {
                    resProducts.push(currentState.products[prod]);
                }
            }
        res.json(resProducts);
        return;
    }
    );

});

module.exports = router;
