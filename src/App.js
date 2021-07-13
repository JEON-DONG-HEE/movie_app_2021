import React from 'react';

const listFood = [
  {
    key: 1,
    name : "닭가슴살 페퍼",
    image : "https://www.pocketsalad.co.kr/data/goods/20/08/10/447/447_detail_029.jpg"
  },
  {
    key: 2,
    name : "방울토마토",
    image : "https://health.chosun.com/site/data/img_dir/2014/03/27/2014032702818_0.jpg"
  },
  {
    key: 3,
    name : "아몬드 브리즈",
    image : "https://newsimg.hankookilbo.com/cms/articlerelease/2015/04/07/201504071481308694_1.jpg"
  },    
];

function Food({name, picture}) {
  return <div>
    <h1>나는 {name} 을 좋아한다</h1><img src={picture} alt={name} />
  </div>
}

function App() {
  return (
    <div>
      {listFood.map(item => (
        <Food key={item.key} name={item.name} picture={item.image} />
      ))}   
    </div>
  );
}

export default App;
