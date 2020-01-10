const express = require('express');
const recommendations = require('./routes/recommendations');


const app = express('');


app.use(express.json( { extended: false }));


app.use('/recommendations', recommendations )

const PORT = 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));