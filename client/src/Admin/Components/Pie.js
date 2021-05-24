import axios from 'axios';
import React from 'react';
// import React from 'react';
// import ReactApexChart from 'react-apexcharts';

//       class Pie extends React.Component {
//         constructor(props) {
//           super(props);

//           this.state = {
          
//             series: [],
//             options: {
//               chart: {
//                 width: 380,
//                 type: 'pie',
//               },
//               labels: ['Solved', 'Partially', 'Attempted'],
//               responsive: [{
//                 breakpoint: 480,
//                 options: {
//                   chart: {
//                     width: 200
//                   },
//                   legend: {
//                     position: 'bottom'
//                   }
//                 }
//               }]
//             },
          
          
//           };
//         }

//         async componentDidMount(){
//           const response = await axios.get('/api/current_user');
//           const solved = response.data.solvedQuestion.length;
//           const Partially = response.data.partiallySolvedQuestion.length;
//           const Attempted = response.data.attemptedQuestions.length;
//           this.setState({
//             series : [solved, Partially, Attempted]
//           })
//         }

//         render() {
//           console.log('state', this.state)
//           return (
//             <>
//             {
//               this.state.length > 0 ? <div id="chart">
//               <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={380} />
//             </div> : 'Loading...'
//             }
//             </>
            
//           )
//         }
//       }

// export default Pie;

import { PieChart } from 'reaviz';

class MyChart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      solved : 0,
      Partially : 0,
      Attempted : 0
    }
  }
  async componentDidMount(){
              const response = await axios.get('/api/current_user');
              const solved = response.data.solvedQuestion.length;
              const Partially = response.data.partiallySolvedQuestion.length;
              const Attempted = response.data.attemptedQuestions.length;
              this.setState({
                solved ,
                Partially,
                Attempted
              })
            }
  render(){
    return (
      <PieChart
        height={300}
        width={300}
        data={[
          { key: 'Solved', data: this.state.solved },
          { key: 'Partially', data: this.state.Partially  },
          { key: 'Attempted', data: this.state.Attempted  },
        ]}
      />
      )
  }
} 

export default MyChart;