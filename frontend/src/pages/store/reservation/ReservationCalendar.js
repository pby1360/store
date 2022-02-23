import React from 'react';
import { useState, useEffect, createRef } from 'react';
import { Button, InputLabel, TextField, Select, MenuItem, FormControl } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import CustomModal from 'components/CustomModal';
import "styles/pages/reservation/ReservationCalendar.scss";
// import "styles/components/modal.scss";

import axios from 'components/AxiosInstance';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const ReservationCalendar = () => {

  const calendarRef = createRef();
  const navigate = useNavigate();

  let selectedTime = null;

  const [isActiveModal, setAcitveModal] = useState(false);

  const clickDateText = (param) => {
    calendarRef.current.getApi().changeView('timeGridDay', param);
  }

  const handleRegistPopOpen = () => {
    setAcitveModal(true)
  };
  const handleRegistPopClose = () => setAcitveModal(false);

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
    setAcitveModal(true);
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
      <CustomModal open={isActiveModal} title="예약등록" close={handleRegistPopClose}>
	      <CustomModal.Body>
          <section className='reservation-modal-input'>
            <InputLabel>고객</InputLabel>
            <FormControl fullWidth>
              <Select size="small">
                <MenuItem value="">
                  <em>선택하세요</em>
                </MenuItem>
              </Select>
            </FormControl>
          </section>
          <section className='reservation-modal-input'>
            <InputLabel>서비스</InputLabel>
            <FormControl fullWidth>
              <Select size="small">
                <MenuItem value="">
                  <em>선택하세요</em>
                </MenuItem>
              </Select>
            </FormControl>
          </section>
          <section className='reservation-modal-input'>
            <InputLabel>메모</InputLabel>
            <TextField fullWidth={true} variant='outlined' size='small' />
          </section>
          <section className='reservation-modal-input'>
            <InputLabel>예약시작시간</InputLabel>
          </section>
          <section className='reservation-modal-input'>
            <InputLabel>예약종료시간</InputLabel>
          </section>
	      </CustomModal.Body>
	      <CustomModal.Footer>
          <section className="reservation-modal-button">
            <Button variant="contained">등록</Button>
            <Button variant="contained" onClick={handleRegistPopClose}>취소</Button>
          </section>
	      </CustomModal.Footer>
      </CustomModal>
    </div>
  );
};

export default ReservationCalendar;