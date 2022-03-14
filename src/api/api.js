import axios from "axios";

const api = axios.create({
  baseURL:
    "https://b6b9-2804-14c-65f2-8ae9-18ef-61c6-331e-aebc.ngrok.io/api_scandiweb",
});

export default api;
