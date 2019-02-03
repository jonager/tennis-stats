const cheerio = require('cheerio');

const getTopRankings = rankings => {
    const $ = cheerio.load(rankings);
    const topRankings = [];

    rankings.each((i, elem) => {
        const tempArr = [];
        $(elem)
            .children()
            .each((j, elem1) => {
                if ($('a', elem1).attr('href')) {
                    tempArr.push($('a', elem1).attr('href'));
                } else if (
                    $('img', elem1).attr('src') &&
                    $(elem1).text() === ''
                ) {
                    tempArr.push($('img', elem1).attr('src'));
                }
                tempArr.push($(elem1).text());
            });
        topRankings.push(tempArr);
    });

    // Remove empty strings
    removeEmptyStrings(topRankings);

    return topRankings;
};

const removeEmptyStrings = arr => {
    arr.forEach(arr => {
        arr.splice(arr.indexOf(''), 1);
    });
};

module.exports = {
    getTopRankings: getTopRankings
};
