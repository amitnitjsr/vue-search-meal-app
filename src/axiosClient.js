import axios from 'axios'

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
    // mode: 'no-cors',
    // headers: {'Access-Control-Allow-Origin':"*"}
  });

  export default axiosClient;