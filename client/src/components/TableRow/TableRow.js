import React from 'react';

const TableRow = props => {
    let row = props.row.map(rowEle => {
        if (rowEle.split('/').includes('tennis')) {
            return (
                <td>
                    <a href={`http://www.espn.com${rowEle}`}>
                        {props.playerName}
                    </a>
                </td>
            );
        } else if (rowEle.split('.').includes('gif')) {
            return (
                <td>
                    <img src={rowEle} alt="country" />
                </td>
            );
        } else {
            return <td>{rowEle}</td>;
        }
    });

    return <tr>{row}</tr>;
};

export default TableRow;
