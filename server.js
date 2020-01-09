const express = require('express');

const recommendations = require('./routes/recommendations');
const coins = require('./routes/coins')

const app = express('');

app.use(express.json( { extended: false }));

const coinRates = require('./coinRates.json');


app.use('/coins', coins)

app.use('/recommendations', recommendations )

const PORT = 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));