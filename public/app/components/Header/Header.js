import React from 'react';
import CartInformer from '../Cart/CartInformer';
import Logo from './Logo';
import Menu from './Menu';
import Contacts from './Contacts';

const Header = () => (
  <div className="header--static header">
    <div className="container-fluid">
      <Logo />
      <div className="col-xs-10 col-sm-10 col-md-7 col-lg-8 hidden-xs">
        <Menu />
        <Contacts />
      </div>
      <CartInformer />
    </div>
  </div>
);

export default Header;