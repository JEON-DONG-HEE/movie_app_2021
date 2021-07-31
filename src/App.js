import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    count: 0,
  };

  plus = () => {console.log('plus')};
  minus = () => {console.log('minus')};

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
