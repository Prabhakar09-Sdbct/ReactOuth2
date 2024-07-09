import axios from "axios";

const API_URL = process.env.REACT_APP_API_BASE_URL + 'auth/';

class AuthService {
  async login(loginId, password) {
    try {
      const response = await axios.post(API_URL + "signin", {
        loginId,
        password
      });
      
      if (response.status === 200) {
        if (response.data.result.token) {
          localStorage.setItem("userDetails", JSON.stringify(response.data.result));
        }
      }
      return response;
    } catch (error) {
      console.error("Error during login:", JSON.stringify(error));
      throw error; 
    }
  }

  logout() {
    localStorage.removeItem("userDetails");
  }

  register(firstName, lastName, loginId, password) {
    return axios.post(API_URL + "signup", {
      firstName,
      lastName,
      loginId,
      password
    });
  }

  getCurrentUser() {
    try {
      const userDetails = localStorage.getItem("userDetails");

      console.log("userDetails getcurrentuser", JSON.stringify(userDetails));
      return userDetails ? JSON.parse(userDetails) : null;
    } catch (error) {
      console.error("Error fetching user details:", error);
      return null;
    }
  }
}

export default new AuthService();
