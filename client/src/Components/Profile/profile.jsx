import React, { useEffect, useState } from 'react'
// import styled, {css} from 'styled-components'
import styles from './style.module.css'
import BlogButton from './BlogButton'
import axios from 'axios';
import {PulseSpinner} from 'react-spinners-kit'


function Profile() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [solved, setSolved] = useState(0)
    const [attempted, setAttempted] = useState(0)
    const [rank, setRank] = useState(0)
    const [avatar, setAvatar] = useState('')
    useEffect( () => {
      async function getProfileData() {
          const response = await axios.get('/api/current_user')
          console.log(response.data)
          setName(response.data.username)
          setEmail(response.data.email)
          setAvatar(response.data.avatar)
          setRank(response.data.rank)
          setSolved(response.data.solvedQuestion.length)
          setAttempted(response.data.attemptedQuestions.length)
      }
      getProfileData()
    }, [name])
    return (
        <div className={styles.profileContainer}>
           <section className={styles.profile}>
                <header className={styles.header}>
                    <div className={styles.details}>
                    {
                        avatar ? <img src={avatar} alt="profile pic" className={styles.profilePic} /> : 
                        <div className={styles.profileLoader}>
                            <PulseSpinner />
                        </div>
                    }
                        
                    
                    <h1 className={styles.heading}>{name}</h1>
                    <div className={styles.location}>
                        <p>{email}</p>
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.col4}>
                        <h4>{solved}</h4>
                        <p>Solved</p>
                        </div>
                        <div className={styles.col4}>
                        <h4>{attempted}</h4>
                        <p>Attempted</p>
                        </div>
                        <div className={styles.col4}>
                        <h4>{rank}</h4>
                        <p>Rank</p>
                        </div>
                    </div>
                    </div>
                </header>
                </section>
                <h2 style={{textAlign:'center', marginTop:'5rem'}}>My Blogs</h2>
                <div className={styles.blogs}>
                    <div style={{margin:'3rem'}}><BlogButton avatar={avatar} date={'13 June 2021'} title={'React vs Vue'} para={'The primary difference lies in the methods used by Vue vs. React for rendering content onto the DOM.'}/></div>
                    <div style={{margin:'3rem'}}><BlogButton avatar={avatar} date={'10 June 2021'} title={'Node Js (API)'} para={'the Express framework, and MongoDB, focusing on the fundamental REST routes and basic database interaction. '}/></div>
                    <div style={{margin:'3rem'}}><BlogButton avatar={avatar} date={'1 June 2021'} title={'Microservices'} para={'It is an architectural style that structures an application as a collection of services'}/></div>

                </div>
        </div>
    )
}


export default Profile
