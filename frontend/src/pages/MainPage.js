import axios from 'axios';
import React, { useEffect } from 'react';

const MainPage = () => {

  useEffect(() => {
    async function test() {
      await axios.get("http://localhost:8080/home")
        .then((response) => {
          console.log(response);
        });
      }
      test();
    
    }, []);    
  return (
    <div>
      hello world!
    </div>
  );
};

export default MainPage;