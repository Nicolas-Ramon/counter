// avec les hooks (fonction composant)

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
        <input
            type="text"
            value={isNaN(count) ? setCount(0) : count}
            onChange={(event) => setCount(parseInt(event.target.value))}
        />
        <p>Le compteur est à : {count} </p>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
}

export default Counter;

// sans les hooks (class composant)
// import React, { Component } from 'react';

// class Counter extends Component {

//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }

//   handleCounter = (value) => {
//     this.setState({count: value});
//   }

//   render() {
//     return (
//       <div>
//         <p>Le compteur est  à : {this.state.count}</p>
//         <button  onClick={() =>  this.handleCounter(this.state.count + 1)}>
//           +1
//         </button>
//         <button  onClick={() =>  this.handleCounter(this.state.count - 1)}>
//           -1
//         </button>
//       </div>
//     );
//   }
// }

// export default Counter;
