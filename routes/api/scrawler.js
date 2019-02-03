const express = require('express');
const cheerio = require('cheerio');

const helpers = require('../../util/helpers');
const router = express.Router();

const axios = require('axios');

router.get('/top-ten/:rankSize', (req, res) => {
    axios({
        method: 'get',
        url: 'http://www.espn.com/tennis/rankings',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            const $ = cheerio.load(response.data);
            const rankings = $('tbody tr').slice(2, +req.params.rankSize + 2);
            const topRankings = helpers.getTopRankings(rankings);

            res.json(topRankings);
        })
        .catch(error => {
            res.json(error);
        });
});

module.exports = router;
