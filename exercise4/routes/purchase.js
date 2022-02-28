var express = require('express');
fs = require('fs');
var router = express.Router();

router.post('/', function (req, res, next) {
    fs.readFile('./state.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        var currentState = JSON.parse(data.toString());
        const receivedPurchase = req.body;
        console.log(receivedPurchase)
        if (err) {
            console.error(err);
            return;
        }
        for (var prod = 0; prod < currentState.products.length; prod++) {
            if (currentState.products[prod].productNumber === receivedPurchase.productNumber) {
                currentState.products[prod].stock -= receivedPurchase.amount
                receivedPurchase["invoiceNumber"] = Math.floor(Math.random() * 10);
                receivedPurchase["total"] = currentState.products[prod].price * receivedPurchase.amount;
            }
        }
        currentState.purchases.push(receivedPurchase)
        fs.writeFile('./state.json', JSON.stringify(currentState), (err) => {
            if (err) {
                console.error(err);
                return;
            }
        }
        );
        res.sendStatus(200, 'success');
        return;
    });
});


module.exports = router;
