import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increaser = () => {
    this.setState({ count: this.state.count + 1 });
  }

  decreaser = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  }

  reset = () => {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div class="counterBox">
        <h1 id='heading'>Counter App</h1>
        <div><h1 id='count'>{this.state.count}</h1></div>

        <div id='buttons'>
          <button onClick={this.increaser} class="individualButton">+</button>
          <button onClick={this.decreaser} class="individualButton">-</button>
          <button onClick={this.reset}     class="individualButtonReset">Reset</button>
        </div>
      </div>
    );
  }
}

export default App;
