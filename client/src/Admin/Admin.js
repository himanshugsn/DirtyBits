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
            series:[0,0,0],
            rank:0,
            solved:0,
            partiallySolved:0,
            data:[{}]
        }
    }


    componentDidMount(){
        axios.get('/api/current_user').then(response => {
            // console.table(response.data.userDetail)
            // const newSeries = Object.values(response.data.userDetail)  
            // console.log(newSeries)          
            const solved = response.data.solvedQuestion.length
            // console.log('length of solved array', solved)
            // console.log('attempted', response.data.attemptedQuestions)
            // console.log(response.data.timeSeriesGraphData)
            this.setState({
                series : [solved, response.data.partiallySolvedQuestion.length, response.data.attemptedQuestions.length],
                rank:response.data.rank,
                solved:solved,
                partiallySolved:response.data.partiallySolvedQuestion.length,
                data: response.data.timeSeriesGraphData
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
        if(this.state.data.length > 0) {
            var { data } = this.state;
            console.log('data', data)
        }
        return (
            <>
            {
                this.props.auth && this.state.data.length > 0 ? 
                <>
                <h1 className={cx(styles.dashboardTitle, styles.heading1)}>Your Dashboard</h1>
                <div className={cx(styles.container)}>
                <LineGraph data={data}/>
                <div className={styles.cardsPieContainer}>
                    <div className={styles.cardsContainer}>
                        <div className={styles.card}>
                            <h4 className={styles.heading4}>Rank</h4>
                            <span><h1 style={{marginTop:'26%'}} className={styles.heading1}>{this.state.rank}</h1></span>
                        </div>
                        <div className={cx(styles.card, styles.card2)}>
                            <h4 className={styles.heading4}>Partially solved</h4>
                            <span><h1 style={{marginTop:'26%'}} className={styles.heading1}>{this.state.partiallySolved}</h1></span>
                        </div>
                        <div className={cx(styles.card, styles.card3)}>
                            <h4 className={styles.heading4}>Problem solved</h4>
                            <span><h1 style={{marginTop:'26%'}} className={styles.heading1}>{this.state.solved}</h1></span>
                        </div>
                    </div>
                        <Pie series={this.state.series}/>
                
                </div>
            </div> 
            </> 
            :
            <>
            <div>
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
