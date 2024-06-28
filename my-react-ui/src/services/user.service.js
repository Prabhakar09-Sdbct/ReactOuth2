import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "http://localhost:9106/api/user/";

class UserService {
  getAdminBoard() {
    return axios.get(API_URL + 'welcome', { headers: authHeader() });
  }

  getTableData() {
    return axios.get(API_URL + 'preload', { headers: authHeader() });
  }
}

export default new UserService();