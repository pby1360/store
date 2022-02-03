import React from 'react';
import { useNavigate } from 'react-router-dom';
import "styles/pages/reservation/Reservation.scss";

const Reservation = () => {
  const navigate = useNavigate();
  return (
    <div className="reservation-container">
      <section className="title">
        <h1>예약</h1>
      </section>
      <section className="menu-wrap">
        <section className="menu-item" id="reservationList" onClick={() => navigate("/store/reservation/reservation-list")}>
          <h2>예약관리</h2>
          <p>전체 예약목록을 조회하고 신규예약을 등록하거나 수정, 삭제 할 수 있습니다.</p>
        </section>
        <section className="menu-item">
          <h2>등급관리</h2>
          <p>고객 등급을 관리하고 등급별 할인률 및 혜택을 적용할 수 있습니다.</p>
        </section>
        <section className="menu-item">
          <h2>TEST</h2>
          <p>TEST TEST TEST TESTTESTTEST TESTTESTTESTTESTTEST TESTTEST TEST</p>
        </section>
      </section>
    </div>
  );
};

export default Reservation;