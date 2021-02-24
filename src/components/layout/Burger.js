import React from 'react';
import { slide as Menu } from 'react-burger-menu';

const Burger = (props) => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        <i className="fas fa-sign-in-alt"></i> התחבר
      </a>

      <a className="menu-item" href="/orders">
        <i className="fas fa-shopping-cart"></i> ההזמנות שלי
      </a>

      <a className="menu-item" href="/pricings">
        <i className="fas fa-hand-holding-usd"></i> המחירון שלי
      </a>

      <a className="menu-item" href="/updateDetails">
        <i className="fas fa-user"></i> עדכון פרטים
      </a>

      <a className="menu-item" href="/resetPassword">
        <i className="fas fa-lock"></i> איפוס סיסמא
      </a>

      <a className="menu-item" href="/faq">
        <i className="fas fa-question"></i> FAQ
      </a>
    </Menu>
  );
};
export default Burger;
