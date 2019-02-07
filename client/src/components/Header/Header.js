import React from 'react';

import Search from '../../containers/Search/Search';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <React.Fragment>
            <div>
                <span>tennis-stats</span>
                <div>
                    <Search />
                </div>
            </div>
            <div>
                <ul>
                    <li>Records</li>
                    <li>About</li>
                </ul>
            </div>
        </React.Fragment>
    );
};

export default Header;
