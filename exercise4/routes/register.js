var express = require('express');
fs = require('fs');
var router = express.Router();

router.post('/register', function (req, res, next) {
    fs.writeFileSync('../state.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.send(err)
            return;
        }
        const currentState = JSON.parse(data.toString());
        currentState.Users.push(req.data)
        res.json({ "success": true })
    }
    )

});

module.exports = router;
