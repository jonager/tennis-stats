import React from 'react';

import Search from '../../containers/Search/Search';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.Header}>
            <div className={styles.Header__left}>
                <span className={styles.Header__logo}>
                    <a href="/">tennis-stats</a>{' '}
                </span>
                <div className={styles.Header__input}>
                    <Search />
                </div>
            </div>
            <nav className={styles.Header__nav}>
                <ul className={styles.Header__list}>
                    <li className={styles.Header__item}>
                        <a href="/">Records</a>{' '}
                    </li>
                    <li className={styles.Header__item}>
                        <a href="/">About</a>{' '}
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
