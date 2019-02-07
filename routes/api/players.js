const express = require('express');
const db = require('../../database/database');

const router = express.Router();

router.get('/:searchQuery', db.getTournamentWins);

module.exports = router;
