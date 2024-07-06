import axios from "axios";

const API_URL = "http://localhost:9106/api/auth/";

class AuthService {
  async login(loginId, password) {
    const response = await axios
          .post(API_URL + "signin", {
              loginId,
              password
          });
          // console.log("response",response)
      if (response.data.result.token) {
        console.log("added in localstorage");
          localStorage.setItem("userDetails", JSON.stringify(response.data.result));
      }
      return response;
  }

  logout() {
    localStorage.removeItem("userDetails");
  }

  register(firstName,lastName, loginId, password) {
    return axios.post(API_URL + "signup", {
      firstName,
      lastName,
      loginId,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('userDetails'));;
  }
}

export default new AuthService();