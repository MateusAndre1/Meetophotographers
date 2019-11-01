import axios from "axios";

export default {
  saveUser: function(userData) {
    return axios.post("/api/signup", userData);
  },
  loggedIn: function(userData) {
    return axios.post("/api/login", userData)
  },
  firstName: function(userData) {
    return axios.post("/api/user_data", userData.firstname)
  }
};
