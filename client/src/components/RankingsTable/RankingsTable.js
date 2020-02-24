import React from 'react';
// import styles from './RakingsTable.module.scss';
import TableHeader from '../../components/TableHeader/TableHeader';
import TableRow from '../../components/TableRow/TableRow';

const RankingsTable = props => {
    let header = ['Rank', 'Player', 'Country', 'Move', 'Points'];
    let tableRows = props.rankings.map((player, idx) => {
        console.log(player.splice(-1, 1));
        return (
            <TableRow
                key={player.splice(-1, 1).toString()}
                row={player}
                playerName={props.players[idx]}
            />
        );
    });

    return (
        <table>
            <tbody>
                <TableHeader header={header} />
                {tableRows}
            </tbody>
        </table>
    );
};

export default RankingsTable;
