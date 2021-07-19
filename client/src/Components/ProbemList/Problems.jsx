import React from "react";
import axios from 'axios';

import Card from './Component/Card';
import Spinner from './Component/Spinner';
import Dropdown from './Component/Dropdown';
import styles from './Problems.module.css'
import Topic from "./Component/Topic";
import Input from './Component/Input'
import Drop from './Component/Drop'
import NewCard from './Component/NewCard'
import Tab from './Component/Table'

class ProblemList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      level:'',
      isAuth:this.props.auth
    }
  }

  componentDidMount() {
    const tags = this.props.location.state ? this.props.location.state : 'Arrays'
    axios.post('http://54.198.168.63/getData/',{
      "type" : "list",
      "tags" : [tags],
      'level': ''
    })
      .then(reponse => {
        
        console.log(reponse.data.map(d => console.log(d)))
        this.setState(
          { questions:reponse.data }
        )
      })
      .catch(error => {
        console.log(error)
      })
  }

  componentDidUpdate(prevProps, prevState){
    console.log(this.state.questions)
    if (prevState.level !== this.state.level){
        console.log('required new request')
        axios.post('http://54.198.168.63/getData/',{
      "type" : "list",
      "tags" : ["String"],
    })
      .then(reponse => {
        console.log(reponse.data)
        this.setState(
          { questions:reponse.data.filter(question => question.level === this.state.level)}
        )
      })
      .catch(error => {
        console.log(error)
      })

    }else {
      console.log('do not required request')
  }
  } 


  render(){
    return (
        <div className="container">
            <div className={styles.problemTopics}>
                <h1>Solve by Topics</h1>
                <p>Choose one of the topics to practice coding interview questions </p>
                <div className={styles.btntopics}>
                    <Topic 
                    title="Arrays" bgColor="rgb(195,157,252)"
                    gradient="linear-gradient(0deg, rgba(195,157,252,1) 48%, rgba(197,196,213,1) 100%, rgba(245,245,245,1) 100%)"
                    />
                    <Topic 
                    title="Stacks" 
                    bgColor="rgb(86,157,242)"
                    gradient="linear-gradient(0deg, rgba(86,157,242,1) 48%, rgba(197,196,213,1) 100%, rgba(245,245,245,1) 100%)"
                    />
                    <Topic 
                    title="Linked List" 
                    bgColor="rgb(63,193,90)"
                    gradient="linear-gradient(0deg, rgba(63,193,90,1) 48%, rgba(197,196,213,1) 100%, rgba(245,245,245,1) 100%)"
                    />
                    <Topic 
                    title="All" 
                    bgColor="rgb(253,130,64)"
                    gradient="linear-gradient(0deg, rgba(253,130,64,1) 48%, rgba(197,196,213,1) 100%, rgba(245,245,245,1) 100%)"
                    />
                </div>
                <div className={styles.searchQuestions}>
                    <h1>Coding Interview Questions</h1>
                    <div className={styles.inputDrop}>    
                          <Input/>
                        <span className={styles.drop}>
                          <Drop/>
                        </span>
                    </div>
                </div>
                <div className={styles.questions}>
                </div>
                <Tab/>
                
            </div>
                                   
            
        </div>
    )
  }
}
export default ProblemList;
