import axios from "axios";

const instance = axios.create({
    baseURL: 'https://student-api.acpt.lk/api',
    // timeout: 1000,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
  });


  export default instance;