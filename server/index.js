require("dotenv").config();
const express = require('express');
const massive = require('massive');
const app = express();
app.use(express.json());

const controller = require('./controller');

massive(process.env.CONNECTION_STRING)
.then(db => {
    console.log('connected')
    app.set("db", db);
})

const port = 4000;
app.listen(port, () => {
    console.log(`Server up and 💃 on ${port}`)
});