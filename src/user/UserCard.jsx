import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

import editIcon from "../icons/edit.svg";
import deleteIcon from "../icons/delete.svg";
import { deleteUser, getUserData } from "./slice/user-slice";
import ModalEditUser from "./components/ModalEditUser";
import EditUserForm from "./components/EditUserForm";

export default function UserCard({ name, email, id }) {
  const userId = { id: id };

  const [del, setDel] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
    // console.log("1", del);
  }, [del]);

  const handleOnDelete = async () => {
    try {
      await dispatch(deleteUser(userId)).unwrap;
      setDel(true);
      //   console.log("3", del);
      alert("Delete Complete");
    } catch (error) {
      console.log("Please try again");
    }
  };

  return (
    <div className="w-[40vw] h-[10vh] border-2 border-blue-400 rounded-sm my-2 flex justify-evenly items-center">
      <div className="w-[10vw] h-[5vh] border border-black px-2 py-2">
        {name}
      </div>
      <div> : </div>
      <div className="w-[20vw] h-[5vh] border border-black px-2 py-2">
        {email}
      </div>
      <button
        onClick={() => setOpenEdit(true)}
        className="w-[2.2vw] h-[2.2vh] mb-4"
      >
        <img src={editIcon} alt="edit icon" />
      </button>
      {openEdit && (
        <ModalEditUser
          open={openEdit}
          onClose={() => setOpenEdit(false)}
          title="Edit User"
        >
          <EditUserForm id={id} onClose={() => setOpenEdit(false)} />
        </ModalEditUser>
      )}
      <button onClick={handleOnDelete} className="w-[2vw] h-[2vh] mb-4">
        <img src={deleteIcon} alt="delete icon" />
      </button>
    </div>
  );
}
