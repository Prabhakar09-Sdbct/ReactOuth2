import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "http://localhost:9105/api/user/";

class UserService {
  getAdminBoard() {
    return axios.get(API_URL + 'welcome', { headers: authHeader() });
  }
}

export default new UserService();