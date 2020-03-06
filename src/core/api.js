import axios from 'axios';
import {URLs} from '../global/constants';

export default (url, method = 'get', data) => {
  return axios[method](`${URLs.SERVER}${url}`, data);
};
