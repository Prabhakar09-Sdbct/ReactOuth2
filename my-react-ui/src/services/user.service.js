import axios from 'axios';
import authHeader from './auth-header';
import authService from './auth.service';

const API_URL = process.env.REACT_APP_API_BASE_URL + 'auth/';

class UserService {
  getAdminBoard() {
    return axios.get(API_URL + 'welcome', { headers: authHeader() });
  }

  getTableData() {
    return axios.get(API_URL + 'preload', { headers: authHeader() });
  }

  getUserByLoginId() {
    const data = authService.getCurrentUser();

    console.log("getUserByLoginId data",JSON.stringify(data));

    return axios.get(API_URL + 'profile/' + data.loginId, { headers: authHeader() });
  }
}

export default new UserService();