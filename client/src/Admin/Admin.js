import React from 'react'
import LineGraph from './Components/LineGraph';
import Pie from './Components/Pie'
import styles from './Admin.module.css'
import cx from 'classnames'
import axios from 'axios';
import { connect } from 'react-redux'
import Alert from '../Components/alert'
import Login from '../Components/Buttons/Login.js';
import {GiLaurelsTrophy, GiHourglass, GiPartyPopper} from 'react-icons/gi'
import Meter from './Components/Meter'
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
  
            const solved = response.data.solvedQuestion.length
  
            this.setState({
                series : [solved, response.data.partiallySolvedQuestion.length, response.data.partiallySolvedQuestion.length],
                rank:response.data.rank,
                solved:solved,
                partiallySolved:response.data.partiallySolvedQuestion.length,
                data: response.data.timeSeriesGraphData
            })

          }).catch(error => {
            console.log(error)
          })
    }

    render(){
        if(this.state.data.length > 0) {
            var { data } = this.state;
            console.log('data', data)
        }
        return (
            <>
            {
                this.props.auth || this.state.data.length > 0 ? 
                <>
                <div className={styles.container}>
                    <h1 className={styles.title}>DASHBOARD</h1>
                    <LineGraph/>
                    <div className={styles.innerCards}>
                            <div className={styles.card1}>
                                <span className={cx(styles.icon, styles.icon1)}><GiLaurelsTrophy/></span>
                                
                                <h1 className="text-muted">Rank</h1>
                                <h3>{this.state.rank}</h3>
                            </div>
                            <div className={styles.card1}>
                            <span className={cx(styles.icon, styles.icon2)}><GiHourglass/></span>
                                <h1 className="text-muted">Partially Solved</h1>
                                <h3>{this.state.partiallySolved}</h3>
                            </div>
                            <div className={styles.card1}>
                            <span className={cx(styles.icon, styles.icon3)}><GiPartyPopper/></span>
                                <h1 className="text-muted">Solved</h1>
                                <h3>{this.state.solved}</h3>
                            </div>
                    </div>
                    <div className={styles.pie}>
                        <Pie/>
                        {/* <Meter/> */}
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
