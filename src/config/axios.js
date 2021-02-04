import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://gorest.co.in/public-api",
  params: {
    "access-token": "nL6p7nrqP2ivDEKY7dtSEECsN0a7ehywZMaE",
    _format: "json",
  },
});

export default axiosClient;
