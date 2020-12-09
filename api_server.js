const express = require('express');
const bodyparser = require('body-parser');

const authPolicy = require('./middlewares/authPolicy');
const corsPolicy = require('./middlewares/corsPolicy');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(authPolicy);
app.use(corsPolicy);

app.listen(PORT, () => {
    console.log('MAIL MASS SENDER API Started!');
});