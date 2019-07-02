import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://todo-list-react-hooks.firebaseio.com/',
});

export default instance;
