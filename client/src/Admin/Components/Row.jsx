import React from 'react'

function Row(props) {
    return (
        <>
             <tr>
                <th scope="row">{props.rank}</th>
                <td>{props.username}</td>
                <td>{props.score}</td>
            </tr>
        </>
    )
}

export default Row
