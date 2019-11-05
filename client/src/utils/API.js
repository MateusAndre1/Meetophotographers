import axios from "axios";

export default {
  saveUser: function(userData) {
    return axios.post("/api/signup", userData);
  },
  getUser: function(userData) {
    return axios.post("/api/login", userData)
  },
  saveGrapher: function(userData, cb) {
    return axios.post("/api/photographers", userData, cb)
  },
  saveCustomer: function(userData) {
    return axios.post("/api/customers", userData)
  },
  grabUser: function() {
    return axios.post("/api/user_data");
  },
  saveImage: function (userData) {
    return axios.post("/api/images", userData);
  }
};
