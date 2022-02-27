var express = require('express');
state = require('../state.json')
var router = express.Router();


router.get('/products', function (req, res, next) {
    fs.readFileSync('../state.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.send(err)
            return;
        }
        const currentState = JSON.parse(data.toString());
        res.json(currentState);
    }
    )

});

module.exports = router;
