const pgp = require('pg-promise')();
const connection = require('./config/keys').connection;

const db = pgp(connection);

// Queries
const getTournamentWins = (req, res, next) => {
    db.any(
        `SELECT * 
            FROM matches2000todate
            WHERE winner LIKE 'Nadal%'
            AND match_round = 'The Final'
            AND surface = 'Clay'
            ORDER BY match_date DESC;`,
        [true]
    )
        .then(function(data) {
            res.json(data);
        })
        .catch(function(error) {
            console.log(error);
        });
};

module.exports = {
    getTournamentWins: getTournamentWins
};
