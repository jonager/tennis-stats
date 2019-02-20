import React, { Component } from 'react';

import Header from './components/Header/Header';
import TopRankings from './containers/TopRankings/TopRankings';
import './App.css';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <TopRankings />
            </React.Fragment>
        );
    }
}

export default App;
