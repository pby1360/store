import React from 'react';
import { useState, useEffect, createRef } from 'react';
import "styles/pages/reservation/ReservationCalendar.scss";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'components/AxiosInstance';
import FullCalendar, { CalendarApi } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Calendar } from '@fullcalendar/core';

const ReservationCalendar = () => {

  const calendarRef = createRef();

  const navigate = useNavigate();

  const clickDate = (param) => {
    console.log(param);
  };

  const clickDateText = (param) => {
    console.log(param);
    console.log(calendarRef.current.getApi());
    calendarRef.current.getApi().changeView('timeGridDay', "2022-02-03");
  }

  return (
    <div className="reservation-calendar-container">
      <section className="title">
        <h1>예약일정</h1>
      </section>
      <section className="search-bar">
        <FullCalendar
          plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
          initialView="dayGridMonth"
          locale="ko"
          fixedWeekCount={false} // weeks count
          selectable={true} // select cell
          height={700}
          allDaySlot={false}
          slotMinTime="08:00:00"
          slotMaxTime="23:00:00"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          // dayCellContent={injectionCellContent}
          dateClick={(param) => clickDate(param)}
          navLinks={true}
          navLinkDayClick={clickDateText}
          events={[]}
          ref={calendarRef}
        />
      </section>
    </div>
  );
};

export default ReservationCalendar;