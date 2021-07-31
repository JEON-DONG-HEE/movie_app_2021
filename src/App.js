import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    count: 1,
  };

  plus = () => {
    this.setState(current => ({count: current.count + 1}));
  };
  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  };

  render() {
    return (
      <div>
        <p>방울 토마토의 갯수 : {this.state.count}</p>
        <button onClick={this.plus}>Plus</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;
