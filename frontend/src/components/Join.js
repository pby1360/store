import React from 'react';
import { TextField, Button, InputLabel } from '@mui/material';
import 'styles/components/Join.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Join = () => {

  const navigate = useNavigate();

  async function join(e) {
    e.preventDefault();
    if (e.target.password.value !== e.target.passwordCheck.value) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
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
      if (response.data === "duplicated") {
        alert("중복된 아이디 입니다.");
        return;
      } else if (response.data === "success") {
        window.confirm("회원가입을 완료했습니다 로그인 해주세요.");
        navigate("/home/login");
      }
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