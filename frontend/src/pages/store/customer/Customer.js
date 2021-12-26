import React from 'react';
import { Button } from '@mui/material';
import "styles/pages/customer/Customer.scss";

const Customer = (props) => {
  console.log(props);

  const moveMenu = (e) => {
    console.log(e.target.id);
    const target = e.target.id;
    switch (target) {
      case "customerManagement":

        break;
    
      default:
        break;
    }
  }

  return (
    <div className="container">
      <section className="title">
        <h1>고객</h1>
      </section>
      <section className="menu-wrap">
        <section className="menu-item" id="customerManagement" onClick={moveMenu}>
          <h2>고객관리</h2>
          <p>전체 고객목록을 조회하고 신규고객을 등록하거나 수정, 삭제 할 수 있습니다.</p>
        </section>
        <section className="menu-item">
          <h2>등급관리</h2>
          <p>고객 등급을 관리하고 등급별 할인률 및 혜택을 적용할 수 있습니다.</p>
        </section>
        <section className="menu-item">
          <h2>TEST</h2>
          <p>TEST TEST TEST TESTTESTTEST TESTTESTTESTTESTTEST TESTTEST TEST</p>
        </section>
        <section className="menu-item">
          <h2>TEST</h2>
          <p>TEST TEST TEST TESTTESTTEST TESTTESTTESTTESTTEST TESTTEST TEST</p>
        </section>
        <section className="menu-item">
          <h2>TEST</h2>
          <p>TEST TEST TEST TESTTESTTEST TESTTESTTESTTESTTEST TESTTEST TEST</p>
        </section>
        <section className="menu-item">
          <h2>TEST</h2>
          <p>TEST TEST TEST TESTTESTTEST TESTTESTTESTTESTTEST TESTTEST TEST</p>
        </section>
      </section>
    </div>
  );
};

export default Customer;