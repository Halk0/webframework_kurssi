var express = require('express');
var router = express.Router();
fs = require('fs')


router.get('/', function (req, res, next) {
    fs.readFile('./state.json', 'utf-8', (err, data) => {
        var parsed = JSON.parse(data.toString())
        for (var prod = 0; prod < parsed.products.length; prod++) {
            if (parsed.products[prod].productNumber == req.header('productNumber')) {
                res.json(parsed.products[prod]);
                return;
            }
        }
        res.sendStatus(404, 'The product you were looking for could not be found.');
        return;
    });
}
);


module.exports = router;
