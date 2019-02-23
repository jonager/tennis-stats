import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Select from 'react-select';
import axios from 'axios';

import * as helpers from '../../shared/helpers';

class Search extends Component {
    state = {
        tourneyWins: null,
        players: [],
        selectedOption: ''
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

    getPlayers = searchQuery => {
        axios
            .get(`/api/players/all/${searchQuery}`)
            .then(response => {
                this.setState({
                    players: helpers.formatObjectReactSelect(response.data)
                });
            })
            .catch(error => {
                console.log(error.data);
            });
    };

    inputHandler = event => {
        clearTimeout(this.timeout);
        if (!event) {
            return;
        }
        this.timeout = setTimeout(() => {
            this.getPlayers(event);
        }, 1000);
    };

    handleChange = selectedOption => {
        this.setState({
            selectedOption: selectedOption
        });
        this.props.history.push({
            pathname: `/player/${selectedOption.value}`
        });
    };

    render() {
        return (
            <Select
                value={this.state.selectedOption}
                options={this.state.players}
                onInputChange={this.inputHandler}
                onChange={this.handleChange}
                components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null
                }}
                placeholder={'Search a player...'}
            />
        );
    }
}

export default withRouter(Search);
