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

app.get('/api/students', (req, res, next) => {
    const db = req.app.get('db');
    db.get_all_products().then(products => {
        res.status(200).send(products)
        .catch(err => {
            res.status(404).send(err)
        });
    });
});

const port = 4000;
app.listen(port, () => {
    console.log(`Server up and 💃 on ${port}`)
});