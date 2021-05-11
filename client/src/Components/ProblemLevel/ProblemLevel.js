import React from 'react';

import style from './Style.css';
import Card from './Card';
import Typical from 'react-typical'

import Loginbutton from '../Buttons/Login.js';
import AOS from 'aos';
import "aos/dist/aos.css";

class ProblemLevel extends React.Component {
    componentDidMount(){
        AOS.init({
            duration : 2000,
            offset:400
          });
    }
    render(){
        return(
            <div className="section">
            <div className="hero">
                <div className="cont">
                <Typical className='title'
                    steps={['Hello Programmers', 5000]}
                    loop={Infinity}
                    wrapper="h5"
                    >
                </Typical>                               
                    <p> 
                        Learn Data Structures and Algorithms with us.
                    </p>
                    <div style={{maxWidth:'250px', position:"absolute", top:'140%', left:"65%", transform:"translate(-110%,-50%)",}}>
                        <Loginbutton/>                        
                    </div>
                </div>
            </div>
                <h1 style={{
                    fontWeight:600,
                    paddingTop:'4rem',
                    color:'teal'
                }}>Topics</h1>
            <div  className="cards">
                <Card img={'https://blog.amt.in/wp-content/uploads/2018/09/Array-Blog-PIC-900x400.jpg'} value={'Arrays'} title={'Array'} description={'Basic level Data Structures and Algorithms'}/>
                <Card img={'https://appodeal.com/wp-content/uploads/2020/12/meetstack-1280x640-1.jpg'} value={'Stacks'} title={'Stack'} description={'Intermediate level Data Structures and Algorithms'}/>
                <Card img={'https://res.cloudinary.com/practicaldev/image/fetch/s--9sfOG77e--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/a9xj96a85mays1lbon0u.png'} value={'Linked List'} title={'Linked List'} description={'Advance level Data Structures and Algorithms'}/>
                <Card img={'https://miro.medium.com/max/347/1*bAaxCtqn-x8RGGzOoru7pQ.png'} value={'Trees'} title={'Trees'} description={'Advance level Data Structures and Algorithms'}/>
                <Card img={'https://www.cambridgemaths.org/Images/The-trouble-with-graphs.jpg'} value={'Graphs'} title={'Graphs'} description={'Advance level Data Structures and Algorithms'}/>
                <Card img={'https://miro.medium.com/max/2625/1*bD5d60Qjd13wWasHjniQXw.png'} value={'String'} title={'Strings'} description={'Advance level Data Structures and Algorithms'}/>
            </div>
        </div>
        )
    }
}

export default ProblemLevel;