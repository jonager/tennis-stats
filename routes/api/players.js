const express = require('express');
const db = require('../../database/database');

const router = express.Router();

router.get('/:searchQuery', db.getTournamentWins);
router.get('/all/:searchQuery', db.getPlayers);
router.get('/player/:id', db.getPlayer);

module.exports = router;
