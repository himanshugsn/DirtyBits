import React from 'react';
import ReactApexChart from 'react-apexcharts';

      class Pie extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
          
            series: this.props.series,
            options: {
              chart: {
                width: 380,
                type: 'pie',
              },
              labels: ['Solved', 'Partially', 'Attempted'],
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
              }]
            },
          
          
          };
        }

        dataHandler(){
          if(this.state.series){
            return (
              <div id="chart">
              <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={380} />
            </div>
            )
          } else {
            return (
              <div>
                <h6>Not enough data</h6>
              </div>
            )
          }
        }

        render() {
          return (        
            <div>
              {this.dataHandler}
            </div>
          );
        }
      }

export default Pie;