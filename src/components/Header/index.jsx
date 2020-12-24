// Dependencies
import React from 'react';

// Components
import NavMenu from './NavMenu';

// CSS
import './Header.scss';

const Header = props => {
  return (
    <header id="header-comp">
      <div className="item"></div>
      <div className="item center-menu">
        <NavMenu />
      </div>
      <div className="item"></div>
    </header>
  )
};

export default Header;
