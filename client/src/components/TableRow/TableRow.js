import React from 'react';
import * as helpers from '../../shared/helpers';

const TableRow = props => {
    let row = props.row.map(rowEle => {
        if (rowEle.split('/').includes('tennis')) {
            return (
                <td key={helpers.generateId()}>
                    <a href={`http://www.espn.com${rowEle}`}>
                        {props.playerName}
                    </a>
                </td>
            );
        } else if (rowEle.split('.').includes('gif')) {
            return (
                <td key={helpers.generateId()}>
                    <img src={rowEle} alt="country" />
                </td>
            );
        } else {
            return <td key={helpers.generateId()}>{rowEle}</td>;
        }
    });

    return <tr>{row}</tr>;
};

export default TableRow;
