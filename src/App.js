import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    inputLength: 0,
  };

  // how to pass input length into paragraph from same component?

  render() {
    return (
      <div className='App'>
        <input type='text' />
        <p>input length</p>
      </div>
    );
  }
}

export default App;
