import React from 'react';

const TableHeader = props => {
    let header = props.header.map(th => {
        return <th>{th}</th>;
    });
    return <tr>{header}</tr>;
};

export default TableHeader;
