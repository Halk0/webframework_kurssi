var express = require('express');
const { parse } = require('path');
var router = express.Router();
fs = require('fs')


router.post('/', function (req, res, next) {
    fs.readFile('./state.json', 'utf-8', (err, data) => {
        var parsed = JSON.parse(data.toString())
        for (var prod = 0; prod < parsed.purchases.length; prod++) {
            if (parsed.purchases[prod].productNumber == req.header('invoiceNumber') && parsed.purchases[prod].UserId == req.header('UserId')) {
                parsed.purchases.splice(prod, 1);
            }
        }
        fs.writeFile('./state.json', JSON.stringify(parsed), (err) => {
            if (err) {
                console.error(err);
                res.sendStatus(500);
                return;
            }
        }
        );
        res.sendStatus(200, 'success');
        return;
    });
}
);


module.exports = router;
