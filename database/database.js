const pgp = require('pg-promise')();

const connection = require('../config/keys').connection;

const db = pgp(connection);

const getTournamentWins = (req, res, next) => {
    db.any(
        `SELECT * 
            FROM matches2000todate
            WHERE winner ILIKE '${req.params.searchQuery}%'
            AND match_round = 'The Final'
            ORDER BY match_date DESC;`,
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
