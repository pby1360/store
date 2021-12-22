import React from 'react';
import { useEffect } from 'react';
import Auth from 'components/AuthenticationService'
import { TextField, Button } from '@mui/material';
import styles from 'styles/components/Login.scss';
import axios from 'axios';

const Login = () => {

  const login = async (e) => {
    e.preventDefault();
    console.log(e.target.id.value);
    console.log(e.target.pw.value);

    const username = e.target.id.value;
    const password = e.target.pw.value;

    Auth.login(username, password).then((response) => {
      console.log(response);
      Auth.registerSuccessfulLoginForJwt(response.data)
    }).catch((e) => {
      console.error(e);
    }).finally(() => {

    });
   
    // await axios.post("http://localhost:8080/home/login", {
    //     username,
    //     password
    //   }).then((response) => {
    //       console.log(response);
    //   });
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