import React from 'react';
import FeatureItem from './FeaturedItem';

const Featured = () => {
  let arr = [1,2,3,4,5,6,7,8];

  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <div className="catalog margin-top-35">
        <div className="catalog__title">
          New collection summer 2015
        </div>
        <ul className="catalog__products">
          {arr.map((n, i) => {
            return <FeatureItem key={i}/>
          })}
        </ul>
      </div>
    </div>
  );
};

export default Featured;