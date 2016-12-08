import React from 'react';

const Logo = () => (
  <div>
    <div className="col-xs-2 col-sm-2 visible-sm visible-xs">
      <div className="header__mobile__menu">
        <a href="#">
          <span className="glyphicon glyphicon-menu-hamburger"></span>
        </a>
      </div>
    </div>

    <div className="col-xs-8 col-sm-8 col-md-3 col-lg-2">
      <div className="header__logo--static">
        <a href="/">
          <img src="../assets/images/logo.png" alt="" />
        </a>
      </div>
      {/*<div className="header__logo--fixed">*/}
      {/*<a href="/">*/}
      {/*<img src="../assets/images/logo-small.png" alt="" />*/}
      {/*</a>*/}
      {/*</div>*/}
    </div>
  </div>
);

export default Logo;