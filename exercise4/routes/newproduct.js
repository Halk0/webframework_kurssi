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
        const receivedProd = req.body;
        console.log(receivedProd)
        if (err) {
            console.error(err);
            return;
        }

        currentState.products.push(receivedProd)
        fs.writeFile('./state.json', JSON.stringify(currentState), (err) => {
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
});


module.exports = router;
