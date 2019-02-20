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

module.exports = {
    getTournamentWins: getTournamentWins
};
