import React from 'react';
import { useState } from 'react';
import "styles/pages/customer/AddCustomer.scss";
import { Button, InputLabel, TextField, Modal, styled } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import { useNavigate } from 'react-router-dom';
import DaumPostCode from 'components/PostCodeComponent';

const AddCustomer = () => {

  const navigate = useNavigate();

  const [ modalActive, setModalActive] = useState(false);

  const DateInput = styled(InputBase)(() => ({
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '8.5px 14px',
      borderColor: 'rgba(0, 0, 0, 0.23)',
      height: '1.3125em',
    },
  }));

  const addCustomer = async(e) => {
    e.preventDefault();
    console.log(e);
  };

  const selectPostCode = (data) => {
    console.log(data);
    setModalActive(false);
  }

  

  return (
    <div className='add-customer-container'>
      <section className="title">
        <h1>고객등록</h1>
      </section>
      <section className='form'>
        <form onSubmit={addCustomer}>
          <section className='input-form'>
            <section className='input-form-row'>
              <section className='input-form-item'>
                <InputLabel>이름</InputLabel>
                <TextField id='' className='' fullWidth={true} variant='outlined' size='small' required />
              </section>
            </section>
            <section className='input-form-row'>
              <section className='input-form-item'>
                <InputLabel>연락처</InputLabel>
                <TextField id='' className='' variant='outlined' size='small' required fullWidth={true} />
              </section>
              <section className='input-form-item'>
                <InputLabel>생년월일</InputLabel>
                <section className='input-form-item-select'>
                  <DateInput
                    required
                    variant="outlined"
                    name=""
                    type="date"
                    inputlabelprops={{
                      shrink: true,
                    }}
                    fullWidth={true}
                  />
                </section>
              </section>
            </section>
            <section className='input-form-row'>
              <section className='input-form-item-custom' style={{flex:'0.5'}}>
                <InputLabel>우편번호</InputLabel>
                <TextField id='' className='' variant='outlined' size='small' fullWidth={true} disabled onClick={() => setModalActive(true)} style={{backgroundColor: '#E8E8E8'}} placeholder='클릭하세요' />
              </section>
              <section className='input-form-item'>
                <InputLabel>주소</InputLabel>
                <TextField id='' className='' variant='outlined' size='small' fullWidth={true} disabled />
              </section>
              <section className='input-form-item'>
                <InputLabel>상세주소</InputLabel>
                <TextField id='' className='' variant='outlined' size='small' fullWidth={true} />
              </section>
            </section>
            <section className='input-form-row'>
              <section className='input-form-item'>
                <InputLabel>이메일</InputLabel>
                <TextField type="email" id='' className='' variant='outlined' size='small' fullWidth={true} />
              </section>
            </section>
          </section>
          <section className="buttons">
            <Button type="submit" variant='contained'>저장</Button>
            <Button type="button" onClick={() => navigate(-1)} variant='contained'>목록</Button>
          </section>
        </form>
        <Modal
          open={modalActive}
          onClose={ () => setModalActive(false) }
        >
          <div>
            <DaumPostCode selectPostCode={selectPostCode} />
          </div>
        </Modal>
      </section>
    </div>
  );
};

export default AddCustomer;