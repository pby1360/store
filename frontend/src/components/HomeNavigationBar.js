import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/components/NavigationBar.scss';

const NavigationBar = () => {
  return (
    <div className={style}>
      <section className="navigation-bar">
        <section className="navigation-logo">
          <Link to="/">Store</Link>
        </section>
        <nav className="navigation-nav">
          <ul className="navs">
          </ul>
        </nav>
        <section className="navigation-login">
          <Link to="/home/login">로그인</Link>
          <Link to="/home/join">회원가입</Link>
        </section>
      </section>
    </div>
  );
};

export default NavigationBar;