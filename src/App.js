import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    userInput: '',
  };

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value});
  };

  render() {
    return (
      <div className='App'>
        <input
          type='text'
          onChange={this.inputChangedHandler} // fire event handler on every change
          value={this.state.userInput} // change state of userInput 2 way binding
        />
        <p>{this.state.userInput}</p>
      </div>
    );
  }
}

export default App;
