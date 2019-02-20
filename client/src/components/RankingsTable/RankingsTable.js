import React from 'react';
// import styles from './RakingsTable.module.scss';
import TableHeader from '../../components/TableHeader/TableHeader';
import TableRow from '../../components/TableRow/TableRow';

const RankingsTable = props => {
    let header = ['Rank', 'Player', 'Country', 'Move', 'Points'];
    let tableRows = props.rankings.map((player, idx) => {
        return <TableRow row={player} playerName={props.players[idx]} />;
    });
    return (
        <table>
            <TableHeader header={header} />
            {tableRows}
        </table>
    );
};

export default RankingsTable;
