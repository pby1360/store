import React from 'react';
import { useState, useEffect, createRef } from 'react';
import "styles/pages/reservation/ReservationCalendar.scss";
import { Button, Modal, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'components/AxiosInstance';
import FullCalendar, { CalendarApi } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const ReservationCalendar = () => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const calendarRef = createRef();
  const navigate = useNavigate();

  let selectedTime = null;

  const [isRegistOpen, setRegistOpen] = useState(false);

  const clickDateText = (param) => {
    calendarRef.current.getApi().changeView('timeGridDay', param);
  }

  const handleRegistPopOpen = () => {
    setRegistOpen(true)
  };
  const handleRegistPopClose = () => setRegistOpen(false);

  // double click event start
  let numClicks = 0;
  let timeOut;

  const clickDate = (param) => {
    numClicks++ ;
    switch(numClicks) {
      case 2:
        dateDoubleClick(param) ;
        break ;
      case 1:
        timeOut = setTimeout( function() {
          dateClick(param) ;
        },400) ;
        break ;
      default: break;
    }
  };

  const dateClick = (param) => {
    numClicks = 0 ; // 클리수 초기화
  }

  const dateDoubleClick = (param) => {
    clearTimeout(timeOut) ;
	  numClicks = 0 ;
    selectedTime = param.date;
    setRegistOpen(true);
  }
  // double click event end

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
          customButtons={{
            reservationPop: {
              text: "예약등록",
              click: handleRegistPopOpen,
            }
          }}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          dateClick={clickDate}
          navLinks={true}
          navLinkDayClick={clickDateText}
          events={[
            {
              title: 'The Title1', // a property!
              start: '2022-02-12 10:30:00', // a property!
              end: '2022-02-12 12:00:00', // a property!
            },
            {
              title: 'The Title2', // a property!
              start: '2022-02-12 11:00:00', // a property!
              end: '2022-02-12 12:00:00', // a property!
            },
            {
              title: 'The Title3', // a property!
              start: '2022-02-12 10:30:00', // a property!
              end: '2022-02-12 13:00:00', // a property!
            }
          ]}
          ref={calendarRef}
        />
      </section>
      <Modal
        open={isRegistOpen}
        onClose={handleRegistPopClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {selectedTime}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ReservationCalendar;