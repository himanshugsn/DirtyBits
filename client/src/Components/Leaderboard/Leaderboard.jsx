import axios from 'axios'
import React from 'react'

class Leaderboard extends React.Component {
    async componentDidMount(){
        const response = await axios.get('/api/leaderboard');
        console.log(response)
    }
    render(){
        return (
            <div style={{height:'100vh'}}><h1>Leaderboard</h1></div>
        )
    }
}

export default Leaderboard
