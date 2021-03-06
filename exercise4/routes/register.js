var express = require('express');
fs = require('fs');
var router = express.Router();

router.post('/', function (req, res, next) {
    var currentState;
    fs.readFile('./state.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.send(err)
            return;
        }
        currentState = JSON.parse(data.toString());
        currentState.accounts.push(req.body);
        fs.writeFile('./state.json', JSON.stringify(currentState), (err) => {
            if (err) {
                console.error(err);
                res.send(err)
                return;
            }
            res.json({ "success": true });
            return;
        }
        )
    })
});

module.exports = router;
