import axios from "axios";

const AppUrl = axios.create({
  baseURL: "http://localhost:9000/api/v1",
});

export default AppUrl;
