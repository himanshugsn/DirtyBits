import React from 'react'
// import styled, {css} from 'styled-components'
import styles from './style.module.css'
import BlogButton from './BlogButton'

function profile() {
    const array = new Array(10).fill(10)
    return (
        <div className={styles.profileContainer}>
           <section className={styles.profile}>
                <header className={styles.header}>
                    <div className={styles.details}>
                    <img src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=b38c22a46932485790a3f52c61fcbe5a" alt="John Doe" className={styles.profilePic} />
                    <h1 className={styles.heading}>Mohit Bisht</h1>
                    <div className={styles.location}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12 ,2Z"></path>
                </svg>
                        <p>Kochi, India</p>
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.col4}>
                        <h4>20</h4>
                        <p>Reviews</p>
                        </div>
                        <div className={styles.col4}>
                        <h4>10</h4>
                        <p>Communities</p>
                        </div>
                        <div className={styles.col4}>
                        <h4>100</h4>
                        <p>Discussions</p>
                        </div>
                    </div>
                    </div>
                </header>
                </section>
                <div className={styles.blogs}>
                    {array.map(item => <div style={{margin:'10px'}}><BlogButton/></div>)}
                </div>
        </div>
    )
}


export default profile
