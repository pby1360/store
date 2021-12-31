import React from 'react';
import { useState } from 'react';
import "styles/pages/customer/AddCustomer.scss";
import { Button, InputLabel, TextField, Modal, styled } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import { useNavigate } from 'react-router-dom';
import DaumPostCode from 'components/PostCodeComponent';
import axios from 'components/AxiosInstance';

const AddCustomer = () => {

  const navigate = useNavigate();

  const [ modalActive, setModalActive] = useState(false);
  const [ info, setInfo ] = useState({
    name: "",
    mobile: "",
    birth: "",
    jibunAddress: "",
    roadAddress: "",
    detailAddress: "",
    email: "",
    memo: "",
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

  const selectPostCode = (data) => {
    if (data.userSelectedType === "R") {
      setInfo({
        ...info,
        jibunAddress: data.jibunAddress ? data.jibunAddress : data.autoJibunAddress,
        roadAddress: data.address,
      });
    } else {
      setInfo({
        ...info,
        jibunAddress: data.jibunAddress ? data.jibunAddress : data.autoJibunAddress,
        roadAddress: data.address,
      });
    }
    setModalActive(false);
  }

  const onChange = async (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    });
  }

  const addCustomer = async(e) => {
    e.preventDefault();
    info.name = info.name.trim();
    info.mobile = info.mobile.replace(/\s/g,'').replace(/[^0-9]/g,'');
    if (info.mobile.length > 11) {
      alert("연락처 형식이 일치하지 않습니다.");
      return;
    }
    const userInfo = {};
    userInfo.name = info.name ? info.name : null;
    userInfo.mobile = info.mobile ? info.mobile : null;
    userInfo.birth = info.birth ? info.birth : null;
    userInfo.jibunAddress = info.jibunAddress ? info.jibunAddress : null;
    userInfo.roadAddress = info.roadAddress ? info.roadAddress : null;
    userInfo.detailAddress = info.detailAddress ? info.detailAddress : null;
    userInfo.email = info.email ? info.email : null;
    userInfo.memo = info.memo ? info.memo : null;
    await axios.post('/api/customer', userInfo,
    {
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(function (response) {
      console.log(response);
      window.confirm("등록이 완료됐습니다.");
      navigate('/store/customer/customer-list', { replace: true })
    }).catch(function (error) {
      console.error(error);
    });
  };

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
                <TextField onChange={onChange} id='mobile' name='mobile' variant='outlined' size='small' fullWidth={true} />
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
                <section className='input-form-item-custom-group'>
                  <TextField onChange={onChange} value={info.jibunAddress} id='address1' name='address1' variant='outlined' size='small' fullWidth={true} disabled />
                  <Button variant='contained' style={{backgroundColor: '#333' }} onClick={() => setModalActive(true)}>검색</Button>
                </section>
              </section>
              <section className='input-form-item'>
                <InputLabel>도로명주소</InputLabel>
                <TextField onChange={onChange} value={info.roadAddress} id='address2' name='address2' className='' variant='outlined' size='small' fullWidth={true} disabled />
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
            <section className='input-form-row'>
              <section className='input-form-item'>
                <InputLabel>메모</InputLabel>
                <TextField onChange={onChange} type="text" id='memo' name='memo' className='' variant='outlined' multiline rows={5} fullWidth={true} />
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