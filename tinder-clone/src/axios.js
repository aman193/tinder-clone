import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-backened-ak.herokuapp.com",
});

export default instance;
