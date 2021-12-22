import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/components/NavigationBar.scss';

const NavigationBar = () => {
  return (
    <div className={style}>
      <section className="navigation-bar">
        <section className="navigation-logo">
          <Link to="/store">BIZ-PLUS</Link>
        </section>
        <nav className="navigation-nav">
          <ul className="navs">
            <li><Link to="/store/customers">고객관리</Link></li>
            <li><Link to="/store/reservations">예약관리</Link></li>
            <li><Link to="/store/materials">자재관리</Link></li>
            <li><Link to="/store/sales">매출관리</Link></li>
            <li><Link to="/store/community">커뮤니티</Link></li>
            <li><Link to="/store/system">시스템관리</Link></li>
          </ul>
        </nav>
        <section className="navigation-login">
          <Link to="/">로그아웃</Link>
        </section>
      </section>
    </div>
  );
};

export default NavigationBar;