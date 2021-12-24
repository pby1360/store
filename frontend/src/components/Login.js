import React from 'react';
import Auth from 'components/AuthenticationService'
import { TextField, Button } from '@mui/material';
import styles from 'styles/components/Login.scss';

const Login = () => {

  const login = async (e) => {
    e.preventDefault();
    const username = e.target.id.value;
    const password = e.target.pw.value;
    Auth.login(username, password).then((response) => {
      if (response) {
        Auth.registerSuccessfulLoginForJwt(response.data);
        window.location.replace("/store");
      }
    }).catch((e) => {
      if (e.response.status === 401) {
        alert("아이디 또는 비밀번호를 확인하세요.");
      } else {
        alert("Error");
      }

    }).finally(() => {
    });
  }
  return (
    <div className={styles}>
      <form onSubmit={login} className="login-container">
        <section className="login-box">
          <p>BIZ-PLUS 로그인</p>
          <TextField id="id" variant="outlined" placeholder="ID" size="small" />
          <TextField id="pw" variant="outlined" placeholder="PassWord" size="small" type="password" />
          <Button type="submit" className="login-button" variant="contained" size="large">로그인</Button>
        </section>
      </form>
    </div>
  );
};

export default Login;