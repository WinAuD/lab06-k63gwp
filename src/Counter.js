import React from 'react';
import React, { useState } from 'react'; // Fuer hook

function Counter() {

  const [state, setState] = useState({count: 0}); // A2a
  const [num, setNum] = useState(0); //


  return (
    <div>
      <div>
        Count: {state.count}
        <br></br>
        <button onClick={() => setState({ count: parseInt(state.count) + 1 })}>
         OK
      </button>
      </div >
      
      <div>
        Count (single value): {num}
        <br></br>
        <button onClick={() => setNum(num + 1)}>
          OK
      </button>
      </div >
    </div >
  );
}
export default Counter;

// AUFGABE 1:
// class Counter extends React.Component {

//   state = { count: this.props.init };

//   jump() {
//     this.setState({ count: parseInt(this.state.count) + 1 });
//   }

//   render() {
//     return (
//       <div>
//         Count: {this.state.count}
//         <br></br>
//         <button onClick={() => this.jump()}>
//           OK
//         </button>
//       </div >
//     );
//   }
// }
// export default Counter;