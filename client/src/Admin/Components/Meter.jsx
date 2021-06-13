// import axios from 'axios';
// import React from 'react';
// import { Doughnut } from 'react-chartjs-2';

// export default class Meter extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       data : {
//         labels: ['Solved', 'Partially', 'Attempted'],
//       datasets: [
//         {
//           label: '# of Votes',
//           data: [0,0,0],
//           backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
//           borderColor: [
//             'rgba(255, 99, 132, 1)',
//             'rgba(54, 162, 235, 1)',
//             'rgba(255, 206, 86, 1)',
//             'rgba(75, 192, 192, 1)',
//             'rgba(153, 102, 255, 1)',
//             'rgba(255, 159, 64, 1)',
//           ],
//           borderWidth: 1,
//         },
//       ],
//     }
//   }
//   }

//   async componentDidMount(){
//     const response = await axios.get('/api/current_user');
//     const solved = response.data.solvedQuestion.length;
//     const Partially = response.data.partiallySolvedQuestion.length;
//     const Attempted = response.data.attemptedQuestions.length;
//     this.setState({
//       data : {
//         datasets : [{
//           data : [solved, Partially, Attempted]
//         }]
//       }
//     })
//   }

//   handler(){
//     if(this.state.data.datasets[0]?.data?.length > 0){
//       return (
//         <div>
//         {/* <div className='header'>
//           <h1 style={{color:'white'}} className='title1'>Doughnut Chart</h1>
//         </div> */}
//         <Doughnut data={this.state.data} />
//       </div>
//       )
//     }
//   }

//   render(){
//     return (
//       <>
//      {
//        this.handler()
//      }
//      </>
//     )
//   }
// }
