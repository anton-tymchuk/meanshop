import React from 'react';

import React, { PropTypes } from 'react'

const CartInformer = (props) => (
  <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
    <span className="favorite__informer">
        <span className="favorite__informer__icon">
            <img src="../assets/images/fav_icon_24.png" />
          {/*<span className="favorite__informer__counter" ng-if="cartLenght > 0"></span>*/}
        </span>
    </span>

    <div className="cart__informer">
      <a href="/cart">
        <span className="cart__informer__icon">
            <img src="../assets/images/cart_icon_24.png" />
        </span>

        <span className="cart__informer__counter"> 0 </span>
      </a>
    </div>

  </div>
);

export default CartInformer;
