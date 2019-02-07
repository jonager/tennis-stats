import React, { Component } from 'react';
import axios from 'axios';

import styles from './Search.module.scss';
import SearchBar from '../../components/SearchBar/SearchBar';

class Search extends Component {
    state = {
        tourneyWins: null
    };

    timeout = null;

    getTournamentWins = searchQuery => {
        axios
            .get(`/api/players/${searchQuery}`)
            .then(response => {
                this.setState({
                    tourneyWins: response.data
                });
            })
            .catch(error => {
                console.log(error.data);
            });
    };

    inputHandler = event => {
        event.persist();
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.getTournamentWins(event.target.value);
        }, 1000);
    };
    render() {
        return <SearchBar inputHandler={this.inputHandler} />;
    }
}

export default Search;
