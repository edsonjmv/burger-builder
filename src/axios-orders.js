import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-ejmv.firebaseio.com'
});

export default instance;