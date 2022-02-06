import React from 'react';
import { useState, useEffect } from 'react';
import "styles/pages/reservation/ReservationCalendar.scss";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'components/AxiosInstance';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const ReservationCalendar = () => {

  const navigate = useNavigate();

  const clickDate = (param) => {
    console.log(param);
  };

  const clickDateText = (param) => {
    console.log(param);
  }

  const injectionCellContent = (args) => {
    return (
      <div>
        <a className="fc-date-text" href='#$' onClick={clickDateText}>{args.dayNumberText}</a>
      </div>
    );
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
          events={[
            {
              title: 'event 1',
              start: '2022-02-05 08:00',
              end: "2022-02-05 08:30",
            },
            {
              title: 'event 2',
              start: '2022-02-05 08:00',
              end: "2022-02-05 08:30",
            },
            {
              title: 'event 3',
              start: '2022-02-05 08:00',
              end: "2022-02-05 08:30",
            },
            {
              title: 'event 4',
              start: '2022-02-05 09:00',
              end: "2022-02-05 10:30",
            },
            {
              title: 'event 5',
              start: '2022-02-05 10:00',
              end: "2022-02-05 10:30",
            },
            {
              title: 'event 6',
              start: '2022-02-05 09:00',
              end: "2022-02-05 10:30",
            },
          ]}
        />
      </section>
    </div>
  );
};

export default ReservationCalendar;