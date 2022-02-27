var express = require('express');
fs = require('fs');
var router = express.Router();

router.post('/edit', function (req, res, next) {
    fs.writeFileSync('../state.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        const currentState = JSON.parse(data.toString());

        for (var prod = 0; prod < currentState.products.length; prod++) {
            if (currentState.products[prod].productNumber == req.headers.product.productNumber) {
                currentState.products[prod] = req.headers.product
            }
        }
    }
    )

});

module.exports = router;
