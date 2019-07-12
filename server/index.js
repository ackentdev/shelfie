require("dotenv").config();
const express = require('express');
const massive = require('massive');
const app = express();
app.use(express.json());

const { getThisBread, postThatShit, deleteThatShit } = require('./controller');

massive(process.env.CONNECTION_STRING)
.then(db => {
    console.log('connected')
    app.set("db", db);
})

app.get('/api/inventory', getThisBread);

app.post('/api/product', postThatShit);

app.delete('/api/product/:id', deleteThatShit)

const port = 4000;
app.listen(port, () => {
    console.log(`Server up and 💃 on ${port}`)
});