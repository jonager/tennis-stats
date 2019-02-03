const express = require('express');
const bodyParser = require('body-parser');

const db = require('./queries');

// Routes

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use routes
app.get('/', db.getTournamentWins);

const port = process.env.PORT || 5050;

app.listen(port, () => console.log(`Server running on port ${port}`));
