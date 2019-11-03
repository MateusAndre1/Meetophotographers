import axios from "axios";

export default {
  saveUser: function(userData) {
    return axios.post("/api/signup", userData);
  },
  getUser: function(userData) {
    return axios.post("/api/login", userData)
  },
  saveGrapher: function(userData) {
    return axios.post("/api/photographers", userData)
  },
  saveCustomer: function(userData) {
    return axios.post("/api/customers", userData)
  },
  grabUser: function() {
    return axios.post("/api/user_data");
  }
};
