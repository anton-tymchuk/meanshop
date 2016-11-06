import React from 'react';

const Header = () => {
  return(
    <div>
      <div className="header--static header">
        <div className="container-fluid">

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

          <div className="col-xs-10 col-sm-10 col-md-7 col-lg-8 hidden-xs">

            <div className="header__menu">
              <nav>
                <ul>
                  <li><a href="/">Catalog</a></li>
                  <li><a href="/">Sale</a></li>
                  <li><a href="/">Popular</a></li>
                </ul>
              </nav>
            </div>

            <div className="header__phone">
              <b>1-541-754-3010</b>
              <span className="header__phone__span">
              — <span>call center schedule</span>
              9:00 - 21:00
            </span>
            </div>

          </div>

          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            {/*<cart-informer informer></cart-informer>*/}
          </div>

        </div>
      </div>
    </div>
  )
};

export default Header;