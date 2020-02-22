import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from './todo-componet/todocomponet';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component{
  constructor(){
    super();

    this.state = {
      count: 0
    };
  }

  increament = () => {
    this.setState({count: this.state.count + 1});
  }

  render(){
    return(
      <div>
        <button onClick={this.increament}> Increment</button>
        {this.state.count}
        <ToDo></ToDo>
      </div>
    );
  }
}

export default App;
