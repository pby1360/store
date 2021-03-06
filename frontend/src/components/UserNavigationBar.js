import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/components/NavigationBar.scss';
import Auth from 'components/AuthenticationService';

const NavigationBar = () => {

  const logout = () => {
    Auth.logout();
    window.location.replace("/");
  };
  return (
    <div className={style}>
      <section className="navigation-bar">
        <section className="navigation-logo">
          <Link to="/store">Store</Link>
        </section>
        <nav className="navigation-nav">
          <ul className="navs">
          <li><Link to="/store/sales">영업</Link></li>
            <li><Link to="/store/customer">고객</Link></li>
            <li><Link to="/store/reservation">예약</Link></li>
            <li><Link to="/store/product">재고</Link></li>
            <li><Link to="/store/material">자재</Link></li>
            <li><Link to="/store/community">커뮤니티</Link></li>
            <li><Link to="/store/system">시스템관리</Link></li>
          </ul>
        </nav>
        <section className="navigation-logout">
          <a href="#$" onClick={logout}>로그아웃</a>
        </section>
      </section>
    </div>
  );
};

export default NavigationBar;