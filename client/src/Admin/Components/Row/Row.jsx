import React from 'react'
import styles from './row.module.css'
function Row({username, rank, score, avatar}) {
    return (
        <>
        <article class={styles.leaderboard__profile}>
            <img src={avatar} alt={username} class={styles.leaderboard__picture}/>
            <span class={styles.leaderboard__name}>{username}</span>
            <span class={styles.leaderboard__value}>{score}</span>
        </article>
        </>
    )
}

export default Row
