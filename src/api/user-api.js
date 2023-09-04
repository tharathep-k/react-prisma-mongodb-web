import axios from "./axios";

export const getUserData = () => axios.get("/user/getuserdata/");
export const deleteUser = (id) =>
  axios.delete("/user/deleteuser/", { params: id });
export const editUser = (input) => axios.put("/user/edituser", input)
