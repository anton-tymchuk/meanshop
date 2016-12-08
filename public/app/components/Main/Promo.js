import React from 'react';
import Featured from './Featured';

const Promo = () => (
  <div>
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

      <div className="promo">
        <div className="promo__offer promo__offer__2-3">
          <img src="uploads/promos/sale_big_3у.jpg" alt="" width="100%" />
          <a href="/catalog"></a>
        </div>

        <div className="promo__offer promo__offer__1-3 hidden-sm hidden-xs">
          <img src="uploads/promos/main_look_base_notext.jpg" alt="" width="100%" />
          <a href="">Cool skirts</a>
        </div>
      </div>

      <div className="promo">
        <div className="promo__offer promo__offer__3">
          <img src="uploads/promos/sm%20speed_dating_2.jpg" alt="" width="100%" />
            <a href="/catalog">New collection</a>
        </div>

        <div className="promo__offer promo__offer__3">
          <img src="uploads/promos/main_summer.jpg" alt="" width="100%" />
            <a href="">Summer 2015</a>
        </div>

        <div className="promo__offer promo__offer__3 hidden-sm hidden-xs">
          <img src="uploads/promos/limited_june_sm.jpg" alt="" width="100%" />
            <a href="">Featured</a>
        </div>

      </div>

    </div>
  </div>
);

export default Promo;