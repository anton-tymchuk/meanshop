import React from 'react';
import Header from './Header/Header.js';
import Promo from './Main/Promo';
import Featured from './Main/Featured';
import Footer from './Footer/Footer';

const Main = () => {
  return (
    <div>
      <Header />
      <Promo />
      <Featured />
      <Footer />
    </div>
  )
};

export default Main;