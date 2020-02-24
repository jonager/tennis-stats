import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Switch, withRouter } from 'react-router-dom';
import axios from 'axios';

import styles from './TopRankings.module.scss';
import RankingsTable from '../../components/RankingsTable/RankingsTable';

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

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.getTopRankings(this.props.location.pathname.slice(-3));
        }
    }

    render() {
        let players = [];
        let rankingsTable = null;

        if (this.state.rankings) {
            this.state.rankings.forEach(arr => {
                players.push(arr.splice(2, 1));
            });

            rankingsTable = (
                <React.Fragment>
                    <div>
                        <NavLink
                            activeStyle={{
                                color: '#1db954',
                                borderBottom: '#7DCE82 4px inset'
                            }}
                            to="/rankings/010">
                            Top 10
                        </NavLink>
                        <NavLink
                            activeStyle={{
                                color: '#1db954',
                                borderBottom: '#7DCE82 4px inset'
                            }}
                            to="/rankings/025">
                            Top 25
                        </NavLink>
                        <NavLink
                            activeStyle={{
                                color: '#1db954',
                                borderBottom: '#7DCE82 4px inset'
                            }}
                            to="/rankings/100">
                            Top 100
                        </NavLink>
                    </div>
                    <div className={styles.Cards}>
                        <Switch>
                            <Route
                                path="/rankings/:top"
                                render={() => (
                                    <RankingsTable
                                        rankings={this.state.rankings}
                                        players={players}
                                        // pathname={this.props.location.pathname}
                                    />
                                )}
                            />
                            <Route
                                path="/"
                                exact
                                render={() => (
                                    <RankingsTable
                                        rankings={this.state.rankings}
                                        players={players}
                                    />
                                )}
                            />
                        </Switch>
                    </div>
                </React.Fragment>
            );
        }

        return <div>{rankingsTable}</div>;
    }
}

export default withRouter(TopRankings);
