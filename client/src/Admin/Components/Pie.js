import React from 'react';
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';



export default class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [],
      options: {
        labels: ['Solved', 'Partially Solved', 'Attempted'],
        chart: {
          type: 'donut',
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        legend: {
          fontSize:'15px',
          labels : {
            colors : 'white',
            useSeriesColors : true
          }
        }
      },
    
    
    };
  }

  async componentDidMount(){
    const response = await axios.get('/api/current_user');
    const solved = response.data.solvedQuestion.length;
    const Partially = response.data.partiallySolvedQuestion.length;
    const Attempted = response.data.attemptedQuestions.length;
    this.setState({
      series : [solved, Partially, Attempted]
    })
  }

  handler(){
    if(this.state.series?.length > 0) {
      return (
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="donut" height={700}/>
        </div>
      )
    }
  }

  render() {
    return (
    <>
    {this.handler()}
    </>
   );
  }
}