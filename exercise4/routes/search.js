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
        if (req.header('search'))
            for (var prod = 0; prod < currentState.products.length; prod++) {
                if (currentState.products[prod].manufacturer.includes(req.header('search'))) {
                    resProducts.push(currentState.products[prod]);
                } else if (currentState.products[prod].name.includes(req.header('search'))) {
                    resProducts.push(currentState.products[prod]);
                } else {
                    for (var cat = 0; cat < currentState.products[prod].category.length; cat++)
                        if (currentState.products[prod].category[cat].includes(req.header('search'))) {
                            resProducts.push(currentState.products[prod]);
                        }
                }
            }
        res.json(resProducts);
        return;
    }
    );

});

module.exports = router;
