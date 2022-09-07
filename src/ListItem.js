
import React from 'react';

function ListItem(props) {
    let [number, setNumber] = React.useState(Math.random())

    return (<li>
        Name: {props.name}<br/>
        Location: {props.location}<br/>
        Random number: {number}
        </li>);
}

export default ListItem