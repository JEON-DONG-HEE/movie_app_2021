import React from 'react';

function Food({favourite}) {
  return <h1>나는 {favourite} 를 좋아한다.</h1>
}

function App() {
  return (
    <div>
      Hello!! Dong HEE
      <Food
        favourite = "닭가슴살 페퍼"
      />
      <Food
        favourite = "방울토마토"
      />
      <Food
        favourite = "아몬드 브리즈"
      />
    </div>
  );
}

export default App;
