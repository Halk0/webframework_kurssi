var express = require('express');
fs = require('fs');
var router = express.Router();


router.get('/', function (req, res, next) {
    fs.readFile('./state.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.send(err)
            return;
        }
        const currentState = JSON.parse(data.toString());
        console.log(currentState);
        const resProducts = [];
        if (req.header('name'))
            for (var prod = 0; prod < currentState.products.length; prod++) {
                if (currentState.products[prod].name == req.header('name')) {
                    resProducts.push(currentState.products[prod]);
                }
            }
        else if (req.header('manufacturer'))
            for (var prod = 0; prod < currentState.products.length; prod++) {
                if (currentState.products[prod].manufacturer == req.header('manufacturer')) {
                    resProducts.push(currentState.products[prod]);
                }
            }
        else if (req.header('category'))
            for (var prod = 0; prod < currentState.products.length; prod++) {
                for (var cat = 0; cat < currentState.products[prod].category.length; cat++)
                    if (currentState.products[prod].category[cat] == req.header('category')) {
                        resProducts.push(currentState.products[prod]);
                    }
            }
        res.json(resProducts);
        return;
    }
    );

});

module.exports = router;
