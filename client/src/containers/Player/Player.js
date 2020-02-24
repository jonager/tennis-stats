import React, { Component } from 'react';
import axios from 'axios';

// import avatar from '../../../public/img/avatar.png';

class Player extends Component {
    state = {
        playerInfo: null
    };

    getPlayers = id => {
        axios
            .get(`/api/players/player/${id}`)
            .then(response => {
                this.setState({
                    playerInfo: response.data
                });
            })
            .catch(error => {
                console.log(error.data);
            });
    };

    componentDidMount() {
        this.getPlayers(this.props.match.params.id);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.getPlayers(this.props.match.params.id);
        }
    }

    render() {
        return <div />;
    }
}

export default Player;
