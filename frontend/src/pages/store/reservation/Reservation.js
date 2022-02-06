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
      <section className="menu-item" id="reservationCalendar" onClick={() => navigate("/store/reservation/reservation-calendar")}>
          <h2>예약일정</h2>
          <p>달력에서 월별, 주별, 일별 예약을 관리할 수 있습니다.</p>
        </section>
        <section className="menu-item" id="reservationList" onClick={() => navigate("/store/reservation/reservation-list")}>
          <h2>예약목록</h2>
          <p>전체 예약목록을 조회하고 신규예약을 등록하거나 수정, 삭제 할 수 있습니다.</p>
        </section>
      </section>
    </div>
  );
};

export default Reservation;