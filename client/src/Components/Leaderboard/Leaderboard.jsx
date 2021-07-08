
import axios from 'axios'
import React from 'react'
import LeaderboardUser from '../../Admin/Components/LeaderboardUser'
import styles from './Leaderboard.module.css'
import Row from '../../Admin/Components/Row/Row' 
class Leaderboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            users : []
        }
    }
    async componentDidMount(){
        const response = await axios.get('/api/leaderboard');
        this.setState({
            users : response.data
        })
    }
    render(){
        return (    
            <div className={styles.leaderboardContainer}>
            <article class={styles.leaderboard}>
  <header>
    <h1 class={styles.leaderboard__title}><span class={styles.leaderboard__titleTop}>DirtyBits</span><span class={styles.leaderboard__titleBottom}>Leaderboard</span></h1>
  </header>
  
  <main class={styles.leaderboard__profiles}>
  
    {
                this.state.users.map((user, index) => <Row avatar={this.state.users[index].avatar} username={this.state.users[index].username}  score={this.state.users.indexOf(user) + 1}/>)
    }
  
  </main>
</article>
            </div>
        )
    }
}

export default Leaderboard
