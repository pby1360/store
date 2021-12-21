import React from 'react';
import { TextField, Button, InputLabel } from '@mui/material';
import 'styles/components/Join.scss';
// import axios from 'components/AxiosInstance';
import axios from 'axios';

const Join = () => {

  async function join(e) {
    e.preventDefault();
    const data = {
      userId: e.target.userId.value,
      password: e.target.password.value,
      name: e.target.name.value,
      email: e.target.email.value,
    }
    await axios.post('http://localhost:8080/home/join', data,
    {
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.error(error);
    });
  }
  return (
    <div>
      <section className='join-container'>
        <form onSubmit={join} className='join-form'>
          <p className='join-title'>BIZ-PLUS 회원가입</p>
          <article className='join-input'>
            <InputLabel>아이디</InputLabel>
            <TextField id='userId' className='join-input-field' variant='outlined' size='small' required />
          </article>
          <article className='join-input'>
            <InputLabel>비밀번호</InputLabel>
            <TextField id='password' type="password" className='join-input-field' variant='outlined' size='small' required />
          </article>
          <article className='join-input'>
            <InputLabel>비밀번호 확인</InputLabel>
            <TextField id='passwordCheck' type="password" className='join-input-field' variant='outlined' size='small' required />
          </article>
          <article className='join-input'>
            <InputLabel>이름</InputLabel>
            <TextField id='name' className='join-input-field' variant='outlined' size='small' required />
          </article>
          <article className='join-input'>
            <InputLabel>이메일</InputLabel>
            <TextField id='email' type="email" className='join-input-field' variant='outlined' size='small' required />
          </article>
          <Button type='submit' className='join-button' variant='contained' size='large'>회원가입</Button>
        </form>
    </section>
  </div>
  );
};

export default Join;