import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {

  constructor(props) {  // 컴포넌트 생명주기 1 : 컴포턴트가 Virtual Dom 에 삽입될 때에 호출
    super(props);
    console.log("The component did inserted, Nico see this haha");
  }

  state = {
    count: 1,
  };

  plus = () => {
    this.setState(current => ({count: current.count + 1}));
  };
  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  };

  componentDidMount() { // 컴포넌트 생명주기 3 : 컴포턴트 render 가 완료되었을 때 호출
    console.log("render complited");
  }

  componentDidUpdate() {  // 컴포넌트 생명주기 4 : 컴포턴트가 Udate 되었을 때 호출(state 변경 등)
        console.log("The component did updated");
  }

  componentWillUnmount() {  // 컴포넌트 생명주기 5 : 컴포넌트가 DOM 상에서 제거될 때 호출(컴포넌트 소스가 변경된 후 저장될 때 호출)
    console.log("Removed component");
  }

  render() {
    console.log("render"); // 컴포넌트 생명주기 2 : 컴포턴트가 render 될 때 호출
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
