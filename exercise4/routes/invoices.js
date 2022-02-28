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
        for (pur = 0; pur < currentState.purchases.length; pur++) {
            userPurchases = []
            if (req.header('UserId') == currentState.purchases[pur].UserId)
                userPurchases.push(currentState.purchases[pur])
        }
        res.json(currentState.purchases);
        return;
    }
    )

});

module.exports = router;
