import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL + process.env.VUE_APP_APIKEY,
  withCredentials: false,
  headers: {
    accept: "application/json",
  },
});

export default instance;
