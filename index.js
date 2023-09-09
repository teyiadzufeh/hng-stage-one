require('dotenv').config()
const express = require('express');
const app = express();
const router = require('./routes');

const port = process.env.PORT;

app.use('/api',router);

app.listen(port, ()=> {
    console.log(`App Listening on port ${port}`);
})