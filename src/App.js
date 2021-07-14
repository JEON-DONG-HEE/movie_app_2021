import React from 'react';
import PropTypes from 'prop-types';

const listFood = [
  {
    key: 1,
    name : "닭가슴살 페퍼",
    image : "https://www.pocketsalad.co.kr/data/goods/20/08/10/447/447_detail_029.jpg",
    rating : 5,
  },
  {
    key: 2,
    name : "방울토마토",
    image : "https://health.chosun.com/site/data/img_dir/2014/03/27/2014032702818_0.jpg",
    rating : 4.5,
  },
  {
    key: 3,
    name : "아몬드 브리즈",
    image : "https://newsimg.hankookilbo.com/cms/articlerelease/2015/04/07/201504071481308694_1.jpg",
    rating : 3.0,
  },    
];

// props Type 검사 방법
Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired,
};

function Food({name, picture, rating}) {
  return <div>
    <h1>나는 {name} 을 좋아한다</h1><img src={picture} alt={name} />
    <span rating={rating}>평점 : {rating} / 5</span>
  </div>
}

function App() {
  return (
    <div>
      {listFood.map(item => (
        <Food key={item.key} name={item.name} picture={item.image} rating={item.rating} />
      ))}   
    </div>
  );
}

export default App;
