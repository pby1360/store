import React from 'react';
import { useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import styles from 'styles/components/Login.scss';
// import axios from 'axios';

const Login = () => {

  useEffect(() => {
    // async function test() {
    //   await axios.get("http://localhost:8080/home/hello")
    //     .then((response) => {
    //       console.log(response);
    //     });
    //   }
    //   test();
    
    }, []);

  const login = (e) => {
    e.preventDefault();
    console.log(e.target.id.value);
    console.log(e.target.pw.value);
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