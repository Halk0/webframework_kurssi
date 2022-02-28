var express = require('express');
const { parse } = require('path');
var router = express.Router();
fs = require('fs')


router.get('/', function (req, res, next) {
    fs.readFile('./state.json', 'utf-8', (err, data) => {
        var parsed = JSON.parse(data.toString())
        for (var prod = 0; prod < parsed.purchases.length; prod++) {
            if (parsed.purchases[prod].invoiceNumber == req.header('invoiceNumber') && parsed.purchases[prod].UserId == req.header('UserId')) {
                res.json(parsed.purchases[prod]);
                return;
            }
        }
        res.sendStatus(404, 'The invoice you were looking for could not be found.');
        return;
    });
}
);


module.exports = router;
