import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import TopRankings from './containers/TopRankings/TopRankings';
import Player from './containers/Player/Player';
import './App.css';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path="/player/:id" component={Player} />
                    <Route path="/" component={TopRankings} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default withRouter(App);
