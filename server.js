const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const MongoClient = require('mongodb').MongoClient;
const artistsController = require('./controllers/artists');

const app = express();
const db = require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));

app.get('/', (req, res) => {
    res.send('Hello there');
});

app.get('/artists', artistsController.all);

app.get('/artists/:id', artistsController.findById);

app.post('/artists', artistsController.create);

app.put('/artists/:id', artistsController.update);

app.delete('/artists/:id', artistsController.delete);

db.connect('mongodb://localhost:27017/loftblog_api', (err) => {
    if (err) console.log(err);
    app.listen(PORT, () => {
        console.log(`Api started on the port: ${PORT} - http://localhost:${PORT}`);
        console.log(`Api started on the port: ${PORT} - http://localhost:${PORT}/artists`);
    });
});

