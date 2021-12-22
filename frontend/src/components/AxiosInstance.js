import axios from 'axios'

const url = process.env.NODE_ENV === "production" ? "http://13.125.230.251:8080" : 'http://localhost:8080';
// const url = 'http://localhost:8080';
console.log(url);
// axios 인스턴스를 생성합니다.
const instance = axios.create({
    baseURL: url,
    timeout: 5000
  });

/*
    1. 요청 인터셉터
    2개의 콜백 함수를 받습니다.
*/
instance.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem('token');
      if (token) {
          config.headers['Authorization'] = 'Bearer ' + token;
      }
    //   config.headers['Content-Type'] = 'application/json';
      return config;
    }, 
    function (error) {
        // 요청 에러 직전 호출됩니다.
        return Promise.reject(error);
    }
);

/*
    2. 응답 인터셉터
    2개의 콜백 함수를 받습니다.
*/
instance.interceptors.response.use(
    function (response) {
    /*
        http status가 200인 경우
        응답 성공 직전 호출됩니다. 
        .then() 으로 이어집니다.
    */
        return response;
    },

    function (error) {
        console.error(error);
        // if(error.response.data.error === "Unauthorized") {
            // localStorage.clear();
            // window.location.replace("/");
        // }
    /*
        http status가 200이 아닌 경우
        응답 에러 직전 호출됩니다.
        .catch() 으로 이어집니다.    
    */
        return Promise.reject(error);
    }
);

export default instance;