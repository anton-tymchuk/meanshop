import React from 'react';

const FeaturedItem = () => (
    <li className="catalog__products__item">
      <div className="catalog__image">
        <a href="">
          <img alt="" src="https://hipster-brands.herokuapp.com/uploads/11435582305320.jpg" width="100%" />
        </a>
      </div>

      <div className="catalog__products__item_annotation">

        <div className="catalog__name">
          <a href="">RED DRESS TUTTO BENE</a>
        </div>

        <div className="catalog__price">
        <span className="catalog__price">
           $45.00
        </span>
          <span className="catalog__price--old">
           45
        </span>
        </div>
      </div>
    </li>
);

export default FeaturedItem;