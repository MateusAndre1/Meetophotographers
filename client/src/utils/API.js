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
  saveImage2: function (userData) {
    console.log(userData);
    return axios.post("/api/save-profile-image", userData);
  },
  grabImage: function(userData) {
    return axios.post("/api/profile-image", userData);
  },
  destroyProfileImage: function(userData) {
    console.log(userData);
    
    return axios.delete("/api/delete-profile-image/" + userData);
  }
};
