import axios from "./axios";

export const getUserData = () => axios.get("/user/getuserdata/");
export const editUser = (input) => axios.put("/user/edituser", input);
export const deleteUser = (id) =>
  axios.delete("/user/deleteuser/", { params: id });
export const searchEmail = (input) =>
  axios.get("/user/searchemail", { params: input });
