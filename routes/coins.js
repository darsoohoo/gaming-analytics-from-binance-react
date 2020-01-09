const express = require('express');
const router = express.Router();
const coinData = require('../coinData.json');

router.get('/', (req, res) => {
    res.send(coinData)
});



module.exports = router;