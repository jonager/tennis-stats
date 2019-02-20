import React from 'react';
import styles from './SearchBar.module.scss';

const SearchBar = props => {
    return (
        <input
            onKeyUp={props.inputHandler}
            placeholder="Search player or event"
            type="text"
        />
    );
};

export default SearchBar;
