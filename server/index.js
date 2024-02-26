const express = require('express');
const app = express();

let cors = require('cors');
const port = 8080;

app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json("hello from root route");
})

app.get('/foo', (req, res) => {
    res.status(200).json("hello from the foo route");
})

app.get('/bar', (req, res) => {
    res.status(200).json("hello from the bar route");
})

app.listen(port, () => console.log(`Express server is listening on port ${port}`));
