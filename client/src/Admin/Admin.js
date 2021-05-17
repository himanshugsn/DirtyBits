import React from 'react'
import LineGraph from './Components/LineGraph';
import Pie from './Components/Pie'
import styles from './Admin.module.css'
import cx from 'classnames'
import axios from 'axios';
import { connect } from 'react-redux'
import Alert from '../Components/alert'
import Login from '../Components/Buttons/Login.js';

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series:[0, 0, 0],
            rank:0,
            solved:0,
            partiallySolved:0
        }
    }


    componentDidMount(){
        axios.get('/api/current_user').then(response => {
            // console.table(response.data.userDetail)
            // const newSeries = Object.values(response.data.userDetail)  
            // console.log(newSeries)          
            console.log(response.data)
            const solved = response.data.solvedQuestion.length
            console.log('length of solved array', solved)
            this.setState({
                series: response.data.partiallySolved,
                rank:response.data.rank,
                solved:solved,
                partiallySolved:response.data.partiallySolvedQuestion.length
            })

          }).catch(error => {
            console.log(error)
          })
        // if(this.props.auth) {
        //     this.setState({
        //         rank:this.props.auth.rank,
        //         solved:this.props.auth.problemsSolved,
        //         partiallySolved : this.props.auth.partiallySolved
        //     })        
        // }
       
        // console.log(this.props.auth)
    }

    render(){
        return (
            <>
            {
                this.props.auth ? 
                <>
                <h1 className={styles.dashboardTitle}>Your Dashboard</h1>
                <div className={cx(styles.container)}>
                <LineGraph/>
                <div className={styles.cardsPieContainer}>
                    <div className={styles.cardsContainer}>
                        <div className={styles.card}>
                            <h4>Rank</h4>
                            <span><h1>{this.state.rank}</h1></span>
                        </div>
                        <div className={cx(styles.card, styles.card2)}>
                            <h4>Partially solved</h4>
                            <span><h1>{this.state.partiallySolved}</h1></span>
                        </div>
                        <div className={cx(styles.card, styles.card3)}>
                            <h4>Problem solved</h4>
                            <span><h1>{this.state.solved}</h1></span>
                        </div>
                    </div>
                        <Pie series={this.state.series}/>
                
                </div>
            </div> 
            </> 
            :
            <>
            <div style={{}}>
                <Alert/>
                <div style={{ marginTop:'20px', display:'flex', justifyContent:'center'}}>
                    <Login/>
                </div>
            </div>
            </>
            }
            
            </>
        )
}
}

function mapStateToProps({auth}) {
    return {
        auth
    }
}

export default connect(mapStateToProps)(Admin);
