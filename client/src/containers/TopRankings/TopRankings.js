import React, { Component } from 'react';
import styles from './TopRankings.module.scss';
import RankingsTable from '../../components/RankingsTable/RankingsTable';

import axios from 'axios';

class TopRankings extends Component {
    state = {
        rankings: null
    };

    getTopRankings = (rankSize = 10) => {
        axios
            .get(`/api/scrawler/rankings/${rankSize}`)
            .then(response => {
                this.setState({
                    rankings: response.data
                });
            })
            .catch(error => {
                console.log(error.data);
            });
    };

    componentDidMount() {
        this.getTopRankings();
    }

    render() {
        let players = [];

        if (this.state.rankings) {
            this.state.rankings.forEach(arr => {
                players.push(arr.splice(2, 1));
            });
        }

        return this.state.rankings ? (
            <RankingsTable rankings={this.state.rankings} players={players} />
        ) : null;
    }
}

export default TopRankings;
