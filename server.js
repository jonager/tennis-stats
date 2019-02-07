const express = require('express');
const bodyParser = require('body-parser');

// Routes
const scrawler = require('./routes/api/scrawler');
const players = require('./routes/api/players');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use routes
app.use('/api/scrawler', scrawler);
app.use('/api/players', players);
app.get('/', (req, res) => res.send('tennis-stats api'));

const port = process.env.PORT || 5050;

app.listen(port, () => console.log(`Server running on port ${port}`));
