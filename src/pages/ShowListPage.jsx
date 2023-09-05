import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import UserCard from "../user/UserCard";
import { logout } from "../components/slice/auth-slice";
import { getUserData } from "../user/slice/user-slice";
import Searchbar from "../user/components/Searchbar";

export default function ShowListPage() {
  const userData = useSelector((state) => state.user.userData);
  const filterUserData = useSelector((state) => state.user.filterUserData);

  // console.log(userData);
  // console.log(filterUserData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  const handleOnLogout = async () => {
    await dispatch(logout()).unwrap();
    navigate("/");
  };
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center gap-2">
      <div className="w-full flex justify-between">
        <button className="bg-red-500 text-white w-[68px] h-[36px] rounded-md invisible">
          Logout
        </button>
        <Searchbar />
        <button
          onClick={handleOnLogout}
          className="bg-red-500 text-white w-[68px] h-[36px] rounded-md mr-4 mt-2"
        >
          Logout
        </button>
      </div>
      <div className="w-[50vw] h-[90vh] border-2 border-black rounded-lg flex flex-col items-center overflow-y-auto">
        {filterUserData.map((el) => (
          <UserCard key={el.id} name={el.name} email={el.email} id={el.id} />
        ))}
      </div>
    </div>
  );
}
