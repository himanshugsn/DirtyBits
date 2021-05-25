import React from 'react'
import styles from './LeaderboardUser.module.css'
import Row from './Row.jsx'

class LeaderboardUser extends React.Component {
    render(props){       
        // if(this.props.users.length > 0) {
        //     var score = this.props.users[0].solvedQuestion.length;
        // }         
        return (
            <div className={styles.user}>
                <div className={styles.leaderboardContainer}>
                    <div className={styles.section}>
                    <table class="table table-striped table-dark">
                        <thead>
                            <tr>
                            <th scope="col">Rank</th>
                            <th scope="col">Username</th>
                            <th scope="col">Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.users.map((user, index) => <Row username={this.props.users[index].username} rank={this.props.users[index].rank} score={this.props.users[index].solvedQuestion.length}/>)
                            }
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeaderboardUser