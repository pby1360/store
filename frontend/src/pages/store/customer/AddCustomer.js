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
  const [ info, setInfo ] = useState({
    name: "",
    mobile: "",
    birth: "",
    address1: "",
    address2: "",
    detailAddress: "",
    email: "",
  })

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
    console.log(info);
  };

  const selectPostCode = (data) => {
    console.log(data);
    setInfo({
      ...info,
      address1: data.jibunAddress,
      address2: data.roadAddress,
    });
    setModalActive(false);
  }

  const onChange = async (e) => {
    console.log(e);
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    });
    console.log(info);
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
                <TextField onChange={onChange} id='name' name='name' fullWidth={true} variant='outlined' size='small' required />
              </section>
            </section>
            <section className='input-form-row'>
              <section className='input-form-item'>
                <InputLabel>연락처</InputLabel>
                <TextField onChange={onChange} id='mobile' name='mobile' variant='outlined' size='small' required fullWidth={true} />
              </section>
            </section>
            <section className='input-form-row'>
            <section className='input-form-item'>
                <InputLabel>생년월일</InputLabel>
                <section className='input-form-item-select'>
                  <DateInput
                    onChange={onChange}
                    value={info.birth}
                    variant="outlined"
                    id='birth'
                    name='birth'
                    type="date"
                    required
                    inputlabelprops={{
                      shrink: true,
                    }}
                    fullWidth={true}
                  />
                </section>
              </section>
            </section>
            <section className='input-form-row'>
              <section className='input-form-item-custom' style={{flex:'1'}}>
                <InputLabel>지번주소</InputLabel>
                <TextField onChange={onChange} value={info.address1} id='address1' name='address1' variant='outlined' size='small' fullWidth={true} disabled onClick={() => setModalActive(true)} style={{backgroundColor: '#E8E8E8'}} placeholder='클릭하세요' />
              </section>
              <section className='input-form-item'>
                <InputLabel>도로명주소</InputLabel>
                <TextField onChange={onChange} value={info.address2} id='address2' name='address2' className='' variant='outlined' size='small' fullWidth={true} disabled />
              </section>
            </section>
            <section className='input-form-row'>
              <section className='input-form-item'>
                <InputLabel>상세주소</InputLabel>
                <TextField onChange={onChange} id='detailAddress' name='detailAddress' className='' variant='outlined' size='small' fullWidth={true} />
              </section>
            </section>
            <section className='input-form-row'>
              <section className='input-form-item'>
                <InputLabel>이메일</InputLabel>
                <TextField onChange={onChange} type="email" id='email' name='email' className='' variant='outlined' size='small' fullWidth={true} />
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