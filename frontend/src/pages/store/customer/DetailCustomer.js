import React from 'react';
import { useState, useEffect } from 'react';
import "styles/pages/customer/DetailCustomer.scss";
import { Button, InputLabel, TextField, Modal, styled } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import { useNavigate, useParams } from 'react-router-dom';
import DaumPostCode from 'components/PostCodeComponent';
import axios from 'components/AxiosInstance';

const DetailCustomer = () => {

  const navigate = useNavigate();
  const params = useParams();

  const [ submitActive, setSubmitActive ] = useState(false);
  const [ modalActive, setModalActive ] = useState(false);
  const [ modifyActive, setModifyActive ] = useState(false);
  const [ info, setInfo ] = useState({
    userNo: 0,
    cusNo: 0,
    name: "",
    phoneNumber: "",
    birth: "",
    jibunAddress: "",
    roadAddress: "",
    detailAddress: "",
    email: "",
    memo: "",
    crtDt: "",
  })

  const getCustomerInfo = async() => {
    await axios.get(`/api/customer/${params.userNo}/${params.cusNo}`)
      .then( async (response) => {
        const data = await response.data;
        data.crtDt = new Date(data.crtDt).toLocaleDateString("en-CA", { timezome: "UTC" });
        if (data.birth) {
          data.birth = new Date(data.birth).toLocaleDateString("en-CA", { timezome: "UTC" });
        } else {
          data.birth = "";
        }
        setInfo(data);
        console.log(info);
      }).catch((error) => {
        console.error(error);
        // alertRef.current.handleClick("error", <span>에러가 발생 했습니다. <br />{error.message}</span>);
      }).finally(() => {
        // setLoading(false);
      })
  }

  useEffect(() => {
    // setLoading(true);
    getCustomerInfo();
  }, []);

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

  const modifyButtons = (
    <section className="buttons">
      <Button type="submit" variant='contained'>저장</Button>
      <Button type="button" variant='contained' onClick={ () => clickCancel() }>취소</Button>
    </section>
  );

  const clickCancel = () => {
    setModifyActive(false);
    setSubmitActive(false);
  }
  
  const detailButtons = (
    <section className="buttons">
      <Button type="button" variant='contained' onClick={ () => setModifyActive(true) }>수정</Button>
      <Button type="button" variant='contained' onClick={ () => deleteCustomer() }>삭제</Button>
      <Button type="button" onClick={() => navigate(-1)} variant='contained'>목록</Button>
    </section>
  );

  const onChange = async (e) => {
    console.log("onchange");
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    });
  }

  const editCustomer = async(e) => {
    e.preventDefault();
    if (!submitActive) {
      setSubmitActive(true);
      return;
    }
    info.name = info.name.trim();
    if (info.phoneNumber) {
      info.phoneNumber = info.phoneNumber.replace(/\s/g,'').replace(/[^0-9]/g,'');

      if (info.phoneNumber.length > 11) {
        alert("연락처 형식이 일치하지 않습니다.");
        return;
      }
      const isSave = window.confirm("저장하시겠습니까?");
      if (!isSave) {
        return;
      }
    }
    const userInfo = {};
    userInfo.userNo = info.userNo;
    userInfo.cusNo = info.cusNo;
    userInfo.name = info.name ? info.name : null;
    userInfo.phoneNumber = info.phoneNumber ? info.phoneNumber : null;
    userInfo.birth = info.birth ? info.birth : null;
    userInfo.jibunAddress = info.jibunAddress ? info.jibunAddress : null;
    userInfo.roadAddress = info.roadAddress ? info.roadAddress : null;
    userInfo.detailAddress = info.detailAddress ? info.detailAddress : null;
    userInfo.email = info.email ? info.email : null;
    userInfo.memo = info.memo ? info.memo : null;
    userInfo.crtDt = info.crtDt;
    await axios.put('/api/customer', userInfo,
    {
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(function (response) {
      console.log(response);
      window.confirm("저장을 완료 했습니다.");
      setSubmitActive(false)
      setModifyActive(false);
      getCustomerInfo();
      // navigate('/store/customer/customer-list', { replace: true })
    }).catch(function (error) {
      console.error(error);
    });
  };

  const deleteCustomer = async() => {
    const isDelete = window.confirm("고객정보를 삭제하시겠습니까?");
    if (!isDelete) {
      return;
    }
    const userInfo = {};
    userInfo.userNo = info.userNo;
    userInfo.cusNo = info.cusNo;
    await axios.delete('/api/customer', 
    {
      data : userInfo,
    },
    {
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(function (response) {
      console.log(response);
      window.confirm("고객정보를 삭제했습니다.");
      navigate('/store/customer/customer-list', { replace: true })
    }).catch(function (error) {
      console.error(error);
    });
  }
  return (
    <div className='add-customer-container'>
      <section className="title">
        <h1>고객상세</h1>
      </section>
      <section className='form'>
        <form onSubmit={editCustomer}>
          <section className='input-form'>
            <section className='input-form-row'>
              <section className='input-form-item'>
                <InputLabel>이름</InputLabel>
                <TextField value={info.name} onChange={onChange} id='name' name='name' fullWidth={true} variant='outlined' size='small' required disabled={!modifyActive} />
              </section>
            </section>
            <section className='input-form-row'>
              <section className='input-form-item'>
                <InputLabel>연락처</InputLabel>
                <TextField value={info.phoneNumber} onChange={onChange} id='phoneNumber' name='phoneNumber' variant='outlined' size='small' fullWidth={true} disabled={!modifyActive} />
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
                    disabled={!modifyActive}
                  />
                </section>
              </section>
            </section>
            <section className='input-form-row'>
              <section className='input-form-item-custom' style={{flex:'1'}}>
                <InputLabel>지번주소</InputLabel>
                <section className='input-form-item-custom-group'>
                  <TextField onChange={onChange} value={info.jibunAddress} id='address1' name='address1' variant='outlined' size='small' fullWidth={true} disabled />
                  <Button variant='contained' style={ modifyActive ? {backgroundColor: '#333' } : {backgroundColor: '#c8c8c8' }} onClick={() => setModalActive(true)} disabled={!modifyActive}>검색</Button>
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
                <TextField onChange={onChange} value={info.detailAddress} id='detailAddress' name='detailAddress' className='' variant='outlined' size='small' fullWidth={true} disabled={!modifyActive} />
              </section>
            </section>
            <section className='input-form-row'>
              <section className='input-form-item'>
                <InputLabel>이메일</InputLabel>
                <TextField value={info.email} onChange={onChange} type="email" id='email' name='email' className='' variant='outlined' size='small' fullWidth={true} disabled={!modifyActive} />
              </section>
            </section>
            <section className='input-form-row'>
              <section className='input-form-item'>
                <InputLabel>메모</InputLabel>
                <TextField value={info.memo} onChange={onChange} type="text" id='memo' name='memo' className='' variant='outlined' multiline rows={5} fullWidth={true} disabled={!modifyActive} />
              </section>
            </section>
            <section className='input-form-row'>
              <section className='input-form-item'>
                <InputLabel>등록일</InputLabel>
                <TextField value={info.crtDt} id='crtDt' name='crtDt' className='' variant='outlined' size='small' fullWidth={true} disabled />
              </section>
            </section>
          </section>
          { modifyActive ? (modifyButtons) : (detailButtons) }
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

export default DetailCustomer;