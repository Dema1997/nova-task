import axios from "axios";

const novaApi = axios.create({
  baseURL: "/baseUrl",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export { novaApi };
