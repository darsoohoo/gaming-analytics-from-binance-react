const express = require('express');
const router = express.Router();
const recommendationsData = require('../recommendationData.json')

router.get('/', (req, res) => {
    res.send(recommendationsData);
})







module.exports = router;