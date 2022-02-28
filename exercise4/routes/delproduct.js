var express = require('express');
var router = express.Router();
fs = require('fs')


router.post('/', function (req, res, next) {
    fs.readFile('./state.json', 'utf-8', (err, data) => {
        var parsed = JSON.parse(data.toString())
        for (var prod = 0; prod < parsed.products.length; prod++) {
            if (parsed.products[prod].productNumber == req.header('productNumber')) {
                parsed.products.splice(prod, 1);
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
