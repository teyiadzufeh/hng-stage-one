require('dotenv').config()
const express = require('express');
const app = express();
const router = require('./routes');
const { ExplainVerbosity } = require('mongodb');

const port = process.env.PORT;

app.use(express.json());
app.use('/api',router);

app.listen(port, ()=> {
    console.log(`App Listening on port ${port}`);
})