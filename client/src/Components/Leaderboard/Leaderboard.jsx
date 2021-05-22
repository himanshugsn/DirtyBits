import axios from 'axios'
import React from 'react'
import LeaderboardUser from '../../Admin/Components/LeaderboardUser'
import styles from './Leaderboard.module.css'

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
            <div className={styles.container}>
                <h1>Leaderboard</h1>
                <LeaderboardUser users={this.state.users}/>
            </div>
            
        )
    }
}

export default Leaderboard
