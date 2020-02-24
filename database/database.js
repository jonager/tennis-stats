const pgp = require('pg-promise')();

const connection = require('../config/keys').connection;

const db = pgp(connection);

const getTournamentWins = (req, res, next) => {
    db.any(
        `SELECT * 
            FROM atp_matches
            WHERE winner_name ILIKE '%${req.params.searchQuery}%'
            AND round = 'F'
            ORDER BY tourney_date DESC;`,
        [true]
    )
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        });
};

const getPlayers = (req, res, next) => {
    db.any(
        `SELECT * 
            FROM atp_players
            WHERE first_name ILIKE '%${req.params.searchQuery}%'
            OR last_name ILIKE '%${req.params.searchQuery}%'
            ORDER BY last_name`,
        [true]
    )
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        });
};

const getPlayer = (req, res, next) => {
    db.any(
        `SELECT * 
            FROM atp_players
            WHERE player_id = ${req.params.id}`,
        [true]
    )
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        });
};

module.exports = {
    getTournamentWins: getTournamentWins,
    getPlayers: getPlayers,
    getPlayer: getPlayer
};
