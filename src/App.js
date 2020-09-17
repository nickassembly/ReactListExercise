import React, {Component} from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: '',
  };

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value});
  };

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');

    this.setState({userInput: updatedText});
  };

  render() {
    const charList = this.state.userInput.split('').map((char, index) => {
      return <Char character={char} key={index} clicked={() => this.deleteCharHandler(index)} />;
    });

    return (
      <div className='App'>
        <input
          type='text'
          onChange={this.inputChangedHandler} // fire event handler on every change
          value={this.state.userInput} // change state of userInput 2 way binding
        />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
