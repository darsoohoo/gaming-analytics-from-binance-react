const express = require('express');
const router = express.Router();
const recommendationsData = require('../recommendationData.json')

router.get('/', (req, res) => {
    res.send(recommendationsData);
})


// router.get('/assets?sortBy=Asset&order=desc', (req, res) => {
//     res.send(recommendationsData);
// })


// router.get('/banks?sortBy=Bank&order=desc', (req, res) => {
//     res.send(recommendationsData);
// })








module.exports = router;