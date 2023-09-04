import axios from "./axios";

export const getUserData = () => axios.get("/user/getuserdata");
