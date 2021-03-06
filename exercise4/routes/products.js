var express = require('express');
var router = express.Router();
fs = require('fs')

router.get('/', function (req, res, next) {
    fs.readFile('./state.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.send(err)
            return;
        }
        const currentState = JSON.parse(data.toString());
        res.json(currentState.products);
        return;
    }
    )

});

module.exports = router;
